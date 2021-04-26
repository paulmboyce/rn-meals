import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { ThemeStyles } from "../styles/Theme";
import { getCategory } from "../data/categories";
import { getMealsByCategory } from "../data/meals";
import { FlatList } from "react-native-gesture-handler";
import GridDisplayImage from "../components/GridDisplayImage";

const CategoryMealsScreen = ({ navigation }) => {
	const catId = navigation.getParam("categoryId");
	const category = getCategory(catId);
	const mealsInCategory = getMealsByCategory(catId);

	const renderMeals = (props) => {
		const { index, item } = props;

		return (
			<GridDisplayImage
				navigation={navigation}
				color={category.color}
				name={item.name}
				imageUrl={item.imageUrl}
				routeName="MealDetail"
				routeParams={{
					mealId: item.id,
				}}
			/>
		);
	};

	return (
		<View style={ThemeStyles.screen}>
			<Text style={ThemeStyles.textTitle}>{category.name}</Text>
			<FlatList
				data={mealsInCategory}
				keyExtractor={(item) => item.id}
				renderItem={renderMeals}
			/>
			<View style={ThemeStyles.box1}>
				<Button title="Go Back" onPress={() => navigation.goBack()} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

CategoryMealsScreen.navigationOptions = (navProps) => {
	const catId = navProps.navigation.getParam("categoryId");
	const category = getCategory(catId);

	return {
		title: category.name,
	};
};

export default CategoryMealsScreen;
