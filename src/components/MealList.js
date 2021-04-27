import React from "react";
import { FlatList } from "react-native";

import GridDisplayImage from "../components/GridDisplayImage";

const renderMeals = (navigation, { index, item }) => {
	return (
		<GridDisplayImage
			navigation={navigation}
			name={item.name}
			imageUrl={item.imageUrl}
			routeName="MealDetail"
			routeParams={{
				mealId: item.id,
			}}
		/>
	);
};

/**
 * In const renderMeals = (navigation, { index, item }) => { ...
 * Note use below of .bind(null, navigation) to pass
 * navigation as first param. FlatList will pass { index, item }
 * Also, null is passed as we are not trying to set 'this'.
 */
const MealList = ({ mealsData, navigation }) => {
	return (
		<FlatList
			data={mealsData}
			keyExtractor={(item) => item.id}
			renderItem={renderMeals.bind(null, navigation)}
		/>
	);
};

export default MealList;
