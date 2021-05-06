import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { ThemeStyles, Theme } from "../styles/Theme";
import MealList from "../components/MealList";
import ToggleMenuDrawer from "../navigation/ToggleMenuDrawer";

const FavoritesScreen = ({ navigation, favoriteMeals }) => {
	const renderContent = () => {
		if (favoriteMeals && favoriteMeals.length === 0) {
			return <Text>You have not saved any favorites yet!</Text>;
		}
		return <MealList mealsData={favoriteMeals} navigation={navigation} />;
	};

	return <View style={ThemeStyles.screen}>{renderContent()}</View>;
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
	return { favoriteMeals: state.meals.favoriteMeals };
};
export default connect(mapStateToProps)(FavoritesScreen);
