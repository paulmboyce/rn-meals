import React, { useEffect } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { ThemeStyles } from "../styles/Theme";
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

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
	const title = navigation.getParam("categoryName");
	return { title: title };
};

const mapStateToProps = (state) => {
	return { allMeals: state.meals.allMeals };
};
export default connect(mapStateToProps)(CategoryMealsScreen);
