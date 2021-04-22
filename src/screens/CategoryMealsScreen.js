import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { ThemeStyles } from "../styles/Theme";
import { getCategory } from "../data/categories";
import { getMeals } from "../data/meals";
import { FlatList } from "react-native-gesture-handler";
import GridDisplay from "../components/GridDisplay";

const CategoryMealsScreen = ({ navigation }) => {
	const catId = navigation.getParam("categoryId");
	const category = getCategory(catId);
	const mealsInCategory = getMeals(catId);

	const renderMeals = (props) => {
		console.log("rednerMeals PROPS: ", props);
		const { index, item } = props;

		return (
			<GridDisplay
				navigation={navigation}
				color={category.color}
				name={item.name}
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
				<Button
					title="View Meal Details"
					onPress={
						() => {
							console.log("CLICKED: Implement MealDetail screen ");
						} /*() =>
						navigation.navigate({
							routeName: "MealDetail",
							params: {
								categoryId: catId,
							},
						})
						*/
					}
				/>
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
