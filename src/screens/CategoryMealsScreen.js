import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import { ThemeStyles } from "../styles/Theme";
import { getMealsByCategory } from "../data/mealsUtils";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation }) => {
	const filteredMeals = useSelector((state) => state.meals.filteredMeals);

	const catId = navigation.getParam("categoryId");
	const mealsInCategory = getMealsByCategory(filteredMeals, catId);

	const renderContent = () => {
		if (mealsInCategory.length < 1) {
			return (
				<Text style={ThemeStyles.text}>
					No meals found. Maybe check your settings?
				</Text>
			);
		}
		return <MealList mealsData={mealsInCategory} navigation={navigation} />;
	};
	return <View style={ThemeStyles.screen}>{renderContent()}</View>;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
	const title = navigation.getParam("categoryName");
	return { title: title };
};

export default CategoryMealsScreen;
