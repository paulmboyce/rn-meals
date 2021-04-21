import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { ThemeStyles } from "../styles/Theme";
import getNavigationOptions from "../navigation/NavigationOptions";
import { getCategory } from "../data/categories";

const CategoryMealsScreen = ({ navigation }) => {
	const catId = navigation.getParam("categoryId");
	const category = getCategory(catId);
	return (
		<View style={ThemeStyles.screen}>
			<Text style={ThemeStyles.textTitle}>{category.name}</Text>
			<Button
				title="View Meal Details"
				onPress={() =>
					navigation.navigate({
						routeName: "MealDetail",
						params: {
							categoryId: catId,
						},
					})
				}
			/>
			<Button title="Go Back" onPress={() => navigation.goBack()} />
		</View>
	);
};

const styles = StyleSheet.create({});

CategoryMealsScreen.navigationOptions = {
	...getNavigationOptions(),
	title: "Meal Categories",
};

export default CategoryMealsScreen;
