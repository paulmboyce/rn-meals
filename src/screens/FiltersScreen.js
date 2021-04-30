import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	useWindowDimensions,
	Button,
} from "react-native";

import ToggleMenuDrawer from "../navigation/ToggleMenuDrawer";
import { ThemeStyles, Theme } from "../styles/Theme";
import LabeledSwitch from "../components/LabeledSwitch";
import ThemeButton from "../components/ThemeButton";
import MaterialHeaderButtons from "../navigation/HeaderButtons";

const FiltersScreen = ({ navigation }) => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	const window = useWindowDimensions();
	const vWidth = window.width;

	useEffect(() => {
		navigation.setParams({ FUNCTION_saveSettings: saveSettings });
	}, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

	const saveSettings = () => {
		const settings = {
			isGlutenFree: isGlutenFree,
			isLactoseFree: isLactoseFree,
			isVegan: isVegan,
			isVegetarian: isVegetarian,
		};
		console.log("About to save: ...", settings);
	};

	const styles = StyleSheet.create({
		screen: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
		switchWrapper: {
			borderWidth: 0.25,
			borderRadius: 6,
			borderColor: Theme.cancelColor,
		},
		buttonWrapper: {
			width: vWidth * 0.7,
		},
	});

	return (
		<View style={styles.screen}>
			<View style={ThemeStyles.box1}>
				<Text style={ThemeStyles.textTitle}>Turn ON/OFF Settings:</Text>
			</View>
			<View style={{ ...ThemeStyles.box2, justifyContent: "flex-start" }}>
				<LabeledSwitch
					style={styles.switchWrapper}
					label="Gluten Free"
					initialValue={isGlutenFree}
					onValueChange={setIsGlutenFree}
				></LabeledSwitch>
				<LabeledSwitch
					style={styles.switchWrapper}
					label="Lactose Free"
					initialValue={isLactoseFree}
					onValueChange={setIsLactoseFree}
				></LabeledSwitch>
				<LabeledSwitch
					style={styles.switchWrapper}
					label="Vegan"
					initialValue={isVegan}
					onValueChange={setIsVegan}
				></LabeledSwitch>
				<LabeledSwitch
					style={styles.switchWrapper}
					label="Vegetarian"
					initialValue={isVegetarian}
					onValueChange={setIsVegetarian}
				></LabeledSwitch>
			</View>
			<View style={ThemeStyles.box1}>
				<View style={styles.buttonWrapper}>
					<ThemeButton title="Save Changes" onPress={() => saveSettings()} />
				</View>
			</View>
		</View>
	);
};

FiltersScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Settings",
		headerLeft: () => {
			return <ToggleMenuDrawer navigation={navigation} />;
		},
		headerRight: () => {
			return (
				<MaterialHeaderButtons>
					<ThemeButton
						title="Save"
						onPress={() => {
							const saveSettings = navigation.getParam("FUNCTION_saveSettings");
							saveSettings();
						}}
					/>
				</MaterialHeaderButtons>
			);
		},
	};
};

export default FiltersScreen;
