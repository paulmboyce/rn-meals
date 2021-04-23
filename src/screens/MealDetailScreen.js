import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { ThemeStyles } from "../styles/Theme";
import { getMeal } from "../data/meals";

const MealDetailScreen = ({ navigation }) => {
	const mealId = navigation.getParam("mealId");
	const meal = getMeal(mealId);
	console.log("MEAL: ", meal);

	return (
		<View style={ThemeStyles.screen}>
			<Text style={ThemeStyles.textTitle}>{meal.name} Meal</Text>
			<Button title="Go Home" onPress={() => navigation.popToTop()} />
		</View>
	);
};

const styles = StyleSheet.create({});

MealDetailScreen.navigationOptions = {
	title: "Meal Details",
};
export default MealDetailScreen;
