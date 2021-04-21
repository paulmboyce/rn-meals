import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { ThemeStyles } from "../styles/Theme";
import getNavigationOptions from "../navigation/NavigationOptions";

const MealDetailScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Button title="Go Home" onPress={() => navigation.popToTop()} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontFamily: "OpenSans",
	},
});

MealDetailScreen.navigationOptions = {
	...getNavigationOptions(),
	title: "Meal Details",
};
export default MealDetailScreen;
