import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { ThemeStyles } from "../styles/Theme";
import getNavigationOptions from "../navigation/NavigationOptions";
import CATEGORIES from "../data/categories";

const getCategory = (categoryId) => {
	return CATEGORIES.find((item) => item.categoryId === categoryId);
};

const CategoryMealsScreen = ({ navigation }) => {
	const category = getCategory(navigation.getParam("categoryId"));

	return (
		<View style={ThemeStyles.screen}>
			<Text style={ThemeStyles.textTitle}>{category.name}</Text>
			<Button
				title="View Meal Details"
				onPress={() => navigation.navigate({ routeName: "MealDetail" })}
			/>
			<Button title="Go Back" onPress={() => navigation.goBack()} />
		</View>
	);
};

const styles = StyleSheet.create({});

CategoryMealsScreen.navigationOptions = {
	...getNavigationOptions(),
	title: "Meal Categories",
};

export default CategoryMealsScreen;
