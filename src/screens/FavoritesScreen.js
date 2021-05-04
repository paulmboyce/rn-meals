import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { ThemeStyles, Theme } from "../styles/Theme";
import { getMealsByFilter } from "../data/mealsUtils";
import MealList from "../components/MealList";
import ToggleMenuDrawer from "../navigation/ToggleMenuDrawer";

const FavoritesScreen = ({ navigation, allMeals }) => {
	const mealFavorites = getMealsByFilter(allMeals, "isFavorite");

	return (
		<View style={ThemeStyles.screen}>
			<MealList mealsData={mealFavorites} navigation={navigation} />
		</View>
	);
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "My Favorites",
		headerLeft: () => {
			return <ToggleMenuDrawer navigation={navigation} />;
		},
	};
};

const mapStateToProps = (state) => {
	return { allMeals: state.meals.allMeals };
};
export default connect(mapStateToProps)(FavoritesScreen);
