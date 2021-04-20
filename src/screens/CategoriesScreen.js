import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoriesScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.text}>This is the CategoriesScreen</Text>
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

export default CategoriesScreen;
