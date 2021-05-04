import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Item } from "react-navigation-header-buttons";

import { ThemeStyles, Theme } from "../styles/Theme";
import { getMealsByFilter } from "../data/mealsUtils";
import MealList from "../components/MealList";
import ToggleMenuDrawer from "../navigation/ToggleMenuDrawer";

const FavoritesScreen = ({ navigation }) => {
	const mealFavorites = getMealsByFilter("isFavorite");

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

export default FavoritesScreen;
