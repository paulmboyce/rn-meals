import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { connect } from "react-redux";

import ToggleMenuDrawer from "../navigation/ToggleMenuDrawer";
import { ThemeStyles, Theme } from "../styles/Theme";
import LabeledSwitch from "../components/LabeledSwitch";
import ThemeButton from "../components/ThemeButton";
import MaterialHeaderButtons from "../navigation/HeaderButtons";
import { saveSettingsAction } from "../redux/actions";

const FiltersScreen = (props) => {
	const { navigation, dispatch } = props;
	const [isGlutenFree, setIsGlutenFree] = useState(props.isGlutenFree);
	const [isLactoseFree, setIsLactoseFree] = useState(props.isLactoseFree);
	const [isVegan, setIsVegan] = useState(props.isVegan);
	const [isVegetarian, setIsVegetarian] = useState(props.isVegetarian);

	const window = useWindowDimensions();
	const vWidth = window.width;

	const saveSettings = React.useCallback(() => {
		const settings = {
			isGlutenFree: isGlutenFree,
			isLactoseFree: isLactoseFree,
			isVegan: isVegan,
			isVegetarian: isVegetarian,
		};

		console.log("About to dispatch SAVE_SETTINGS action: ...", settings);
		dispatch(saveSettingsAction(settings));
	}, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

	/**
	 * NOTE: For this Effect to work correctly, it must
	 * be AFTER getSettings, so useEffect sees the new
	 * version of getSettings on a render.
	 */
	useEffect(() => {
		navigation.setParams({ FUNCTION_saveSettings: saveSettings });
	}, [saveSettings]);

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
					<ThemeButton title="Save Changes" onPress={saveSettings} />
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

const mapStateToProps = ({ settings }) => {
	return {
		isGlutenFree: settings.isGlutenFree,
		isLactoseFree: settings.isLactoseFree,
		isVegan: settings.isVegan,
		isVegetarian: settings.isVegetarian,
	};
};

export default connect(mapStateToProps)(FiltersScreen);
