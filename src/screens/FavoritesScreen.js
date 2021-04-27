import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { ThemeStyles, Theme } from "../styles/Theme";
import { getMealsByFilter } from "../data/meals";
import { FlatList } from "react-native-gesture-handler";
import GridDisplayImage from "../components/GridDisplayImage";
import MealList from "../components/MealList";

const FavoritesScreen = ({ navigation }) => {
	const mealFavorites = getMealsByFilter("isFavorite");

	return (
		<View style={ThemeStyles.screen}>
			<Text style={ThemeStyles.textTitle}>My Favorites</Text>
			<MealList mealsData={mealFavorites} navigation={navigation} />
			<View style={ThemeStyles.box1}>
				<Button title="Go Back" onPress={() => navigation.goBack()} />
			</View>
		</View>
	);
};

FavoritesScreen.navigationOptions = (navProps) => {
	return {
		title: "My Favorites",
	};
};

export default FavoritesScreen;
