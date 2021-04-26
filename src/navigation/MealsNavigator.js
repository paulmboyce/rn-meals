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

const tabNavigator = createMaterialBottomTabNavigator(
	{
		Home: { screen: stackNavigator },
		Settings: { screen: FiltersScreen },
		Favorites: { screen: FavoritesScreen },
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
		tabBarOptions: {
			activeTintColor:
				Platform.OS === "ios" ? Theme.primaryColor : Theme.backgroundColor,
			inactiveTintColor: "gray",
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

/*
const tabNavigator = createBottomTabNavigator(
	{
		Home: stackNavigator,
		Settings: FiltersScreen,
		Favorites: FavoritesScreen,
	},
	{
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
		tabBarOptions: {
			activeTintColor: Theme.primaryColor,
			inactiveTintColor: "gray",
		},
	}
);
*/
export default createAppContainer(tabNavigator);
