import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { ThemeStyles } from "../styles/Theme";
import { getCategory } from "../data/categories";
import { getMealsByCategory } from "../data/mealsUtils";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation, allMeals }) => {
	const catId = navigation.getParam("categoryId");
	const mealsInCategory = getMealsByCategory(allMeals, catId);

	return (
		<View style={ThemeStyles.screen}>
			<MealList mealsData={mealsInCategory} navigation={navigation} />
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

const mapStateToProps = (state) => {
	return { allMeals: state.meals.allMeals };
};
export default connect(mapStateToProps)(CategoryMealsScreen);
