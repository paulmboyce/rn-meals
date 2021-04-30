import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

import ToggleMenuDrawer from "../navigation/ToggleMenuDrawer";
import { ThemeStyles, Theme } from "../styles/Theme";
import LabeledSwitch from "../components/LabeledSwitch";

const FiltersScreen = (props) => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	const onGlutenFreeChange = (val) => setIsGlutenFree(val);
	const onLactoseFreeChange = (val) => setIsLactoseFree(val);
	const onVeganChange = (val) => setIsVegan(val);
	const onVegetarianChange = (val) => setIsVegetarian(val);

	const window = useWindowDimensions();
	const vWidth = window.width;
	const vHeight = window.height;

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
					onValueChange={onGlutenFreeChange}
				></LabeledSwitch>
				<LabeledSwitch
					style={styles.switchWrapper}
					label="Lactose Free"
					initialValue={isLactoseFree}
					onValueChange={onLactoseFreeChange}
				></LabeledSwitch>
				<LabeledSwitch
					style={styles.switchWrapper}
					label="Vegan"
					initialValue={isVegan}
					onValueChange={onVeganChange}
				></LabeledSwitch>
				<LabeledSwitch
					style={styles.switchWrapper}
					label="Vegetarian"
					initialValue={isVegetarian}
					onValueChange={onVegetarianChange}
				></LabeledSwitch>
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
	};
};

export default FiltersScreen;
