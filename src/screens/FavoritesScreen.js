import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { ThemeStyles, Theme } from "../styles/Theme";
import { getMealsByFilter } from "../data/meals";
import { FlatList } from "react-native-gesture-handler";
import GridDisplayImage from "../components/GridDisplayImage";

const FavoritesScreen = ({ navigation }) => {
	const mealFavorites = getMealsByFilter("isFavorite");

	const renderMeals = (props) => {
		const { index, item } = props;

		return (
			<GridDisplayImage
				navigation={navigation}
				color={Theme.primaryColor}
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
			<Text style={ThemeStyles.textTitle}>My Favorites</Text>
			<FlatList
				data={mealFavorites}
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

FavoritesScreen.navigationOptions = (navProps) => {
	return {
		title: "My Favorites",
	};
};

export default FavoritesScreen;
