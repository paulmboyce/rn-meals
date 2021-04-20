import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.text}>This is the HOME / CategoriesScreen</Text>
			<Button
				title="Go to Meals"
				onPress={() => {
					navigation.navigate({ routeName: "CategoryMeals" });
				}}
			/>
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
