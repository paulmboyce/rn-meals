import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { ThemeStyles } from "../styles/Theme";
import { getCategory } from "../data/categories";
import { getMealsByCategory } from "../data/meals";
import { FlatList } from "react-native-gesture-handler";
import GridDisplayImage from "../components/GridDisplayImage";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation }) => {
	const catId = navigation.getParam("categoryId");
	const category = getCategory(catId);
	const mealsInCategory = getMealsByCategory(catId);

	return (
		<View style={ThemeStyles.screen}>
			<Text style={ThemeStyles.textTitle}>{category.name}</Text>
			<MealList mealsData={mealsInCategory} navigation={navigation} />
			<View style={ThemeStyles.box1}>
				<Button title="Go Back" onPress={() => navigation.goBack()} />
			</View>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = (navProps) => {
	const catId = navProps.navigation.getParam("categoryId");
	const category = getCategory(catId);

	return {
		title: category.name,
	};
};

export default CategoryMealsScreen;
