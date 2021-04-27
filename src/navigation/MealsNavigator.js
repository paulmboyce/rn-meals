import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import getNavigationOptions from "./NavigationOptions";
import { Theme } from "../styles/Theme";

const stackNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: CategoryMealsScreen,
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: getNavigationOptions(),
	}
);
const settingsNavigator = createStackNavigator(
	{
		Settings: { screen: FiltersScreen },
	},
	{
		defaultNavigationOptions: getNavigationOptions(),
	}
);
const favoritesNavigator = createStackNavigator(
	{
		Favorites: { screen: FavoritesScreen },
		MealDetail: { screen: MealDetailScreen },
	},
	{
		defaultNavigationOptions: getNavigationOptions(),
	}
);

/**
 * NOTE: This config is for React Navigation Version 4.
 * https://reactnavigation.org/docs/4.x/material-bottom-tab-navigator/
 */
const tabNavigator = createMaterialBottomTabNavigator(
	{
		Home: { screen: stackNavigator },
		Favorites: { screen: favoritesNavigator },
		Settings: { screen: settingsNavigator },
	},
	{
		initialRouteName: "Home",
		activeColor:
			Platform.OS === "ios" ? Theme.primaryColor : Theme.backgroundColor,
		inactiveColor: "gray",
		barStyle: {
			backgroundColor:
				Platform.OS === "ios" ? Theme.backgroundColor : Theme.primaryColor,
		},
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let icon;
				switch (routeName) {
					case "Settings": {
						icon = focused ? "settings-sharp" : "settings-outline";
						break;
					}
					case "Favorites": {
						icon = focused ? "star" : "star-outline";
						break;
					}
					default:
						icon = focused ? "home" : "home-outline";
				}

				// You can return any component that you like here!
				return <Ionicons name={icon} size={25} color={tintColor} />;
			},
		}),
	}
);

export default createAppContainer(tabNavigator);
