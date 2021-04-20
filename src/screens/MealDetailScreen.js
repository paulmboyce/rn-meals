import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.text}>This is the MealDetail Screen</Text>
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

export default MealDetailScreen;
