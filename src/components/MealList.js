import React from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import GridDisplayImage from "../components/GridDisplayImage";

const renderMeals = (navigation, allMeals, { index, item }) => {
	return (
		<GridDisplayImage
			navigation={navigation}
			name={item.name}
			imageUrl={item.imageUrl}
			routeName="MealDetail"
			routeParams={{
				mealId: item.id,
				/**
				 * MealDetail screen is forced to find its Meal.Name
				 * which causes more renders, but makes component
				 * more self-contained.
				 * OPTIMISE for Speed(less renders) BY PASSING MEAL NAME HERE:
				 * 	mealName: item.name,
				 * */
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
const MealList = ({ mealsData, navigation, allMeals }) => {
	return (
		<FlatList
			data={mealsData}
			keyExtractor={(item) => item.id}
			renderItem={renderMeals.bind(null, navigation, allMeals)}
		/>
	);
};

const mapStateToProps = (state) => {
	return { allMeals: state.meals.allMeals };
};
export default connect(mapStateToProps)(MealList);
