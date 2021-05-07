import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { ThemeStyles } from "../styles/Theme";
import { getMealsByCategory } from "../data/mealsUtils";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation }) => {
	const allMeals = useSelector((state) => state.meals.allMeals);

	const catId = navigation.getParam("categoryId");
	const mealsInCategory = getMealsByCategory(allMeals, catId);

	return (
		<View style={ThemeStyles.screen}>
			<MealList mealsData={mealsInCategory} navigation={navigation} />
		</View>
	);
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
	const title = navigation.getParam("categoryName");
	return { title: title };
};

export default CategoryMealsScreen;
