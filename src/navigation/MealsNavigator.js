import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

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
				let iconName;
				if (routeName === "Home") {
					iconName = focused ? "home" : "home-outline";
				} else if (routeName === "Settings") {
					iconName = focused ? "settings-sharp" : "settings-outline";
				} else if (routeName === "Favorites") {
					iconName = focused ? "star" : "star-outline";
				}

				// You can return any component that you like here!
				return <Ionicons name={iconName} size={25} color={tintColor} />;
			},
		}),
		tabBarOptions: {
			activeTintColor: Theme.primaryColor,
			inactiveTintColor: "gray",
		},
	}
);
export default createAppContainer(tabNavigator);
