import React, { useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	useWindowDimensions,
	Image,
	ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { Item } from "react-navigation-header-buttons";

import { ThemeStyles, Theme } from "../styles/Theme";
import { getMealById, getFiltersForMeal } from "../data/mealsUtils";
import MaterialHeaderButtons from "../navigation/HeaderButtons";
import { addFavoriteAction, deleteFavoriteAction } from "../redux/actions";

const MealDetailScreen = ({ dispatch, navigation, meal, isFavorite }) => {
	const filters = getFiltersForMeal(meal);

	/**
	 * MealDetail screen runs from meal id and redux state
	 * It is forced to find its Meal.Name
	 * which causes more renders, but makes
	 * component more self-contained.
	 *
	 * OPTIMISE for Speed(less renders):
	 *  By getting mealName from parent (as navigation param) :
	 * 	mealName: item.name,
	 *
	 * Nevertheless this useEffect pattern serves as "a" model for
	 * passing data from Component to React Navigator.
	 * */
	useEffect(() => {
		navigation.setParams({ meal });
		navigation.setParams({ isFavorite });
		navigation.setParams({ dispatch });
	}, [isFavorite]);

	const window = useWindowDimensions();
	const landScape = window.width > window.height;
	const imageSize = landScape ? window.height * 0.25 : window.width;

	const styles = StyleSheet.create({
		imageContainer: {
			width: imageSize,
			height: imageSize,
			marginTop: landScape ? 20 : 0,
			overflow: "hidden",
		},
		image: {
			width: "100%",
			height: "105%",
			resizeMode: "cover",
		},
		listContainer: {
			justifyContent: "center",
			alignItems: "flex-start",
		},
		listItem: {
			borderColor: Theme.cancelColor,
			borderWidth: 0.3,
			borderRadius: 4,
			width: window.width * 0.9,
			marginVertical: 2,
			padding: 10,
		},
		filter: {
			borderWidth: 2,
			borderColor: Theme.primaryColor,
			borderRadius: 10,
			backgroundColor: Theme.primaryColor,
			fontFamily: "OpenSansBold",
			padding: 2,
			color: Theme.backgroundColor,
			overflow: "hidden",
			marginHorizontal: 2,
		},
	});

	const renderIngredients = () => {
		return meal.ingredients.map((ingredient) => {
			return (
				<View key={ingredient} style={styles.listItem}>
					<Text style={ThemeStyles.text}>{ingredient}</Text>
				</View>
			);
		});
	};
	const renderSteps = () => {
		return meal.steps.map((step, index) => {
			return (
				<View key={step} style={styles.listItem}>
					<Text style={ThemeStyles.text}>
						{index + 1}. {step}
					</Text>
				</View>
			);
		});
	};
	const renderTags = () => {
		return filters
			.filter((filter) => filter.value === true)
			.map((filter) => {
				return (
					<Text style={styles.filter} key={filter.name}>
						{filter.name.slice(2, filter.name.length)}
					</Text>
				);
			});
	};

	return (
		<ScrollView>
			<View style={ThemeStyles.screen}>
				<View style={ThemeStyles.box1}>
					<View style={{ ...styles.imageContainer }}>
						<Image style={styles.image} source={{ uri: meal.imageUrl }} />
					</View>
				</View>
				<View
					style={{
						...ThemeStyles.box2Left,
						paddingHorizontal: 18,
					}}
				>
					<Text style={ThemeStyles.textTitle}>{meal.name}</Text>
					<View style={{ ...styles.listContainer, flexDirection: "row" }}>
						{renderTags()}
					</View>
					<Text style={ThemeStyles.textTitleSmall}>Ingredients:</Text>
					<View style={styles.listContainer}>{renderIngredients()}</View>
					<Text style={ThemeStyles.textTitleSmall}>Preparation Steps:</Text>
					<View style={styles.listContainer}>{renderSteps()}</View>
				</View>
			</View>
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
	const meal = navigation.getParam("meal");
	const isFavorite = navigation.getParam("isFavorite");
	let icon = "star-outline";
	if (isFavorite) {
		icon = isFavorite ? "star" : "star-outline";
	}

	return {
		headerTitle: meal ? meal.name : "",
		headerRight: () => {
			return (
				<MaterialHeaderButtons>
					<Item
						title="Add Favorite"
						iconName={icon}
						onPress={() => {
							const dispatch = navigation.getParam("dispatch");
							const action = isFavorite
								? deleteFavoriteAction(meal)
								: addFavoriteAction(meal);
							dispatch(action);
						}}
					/>
				</MaterialHeaderButtons>
			);
		},
	};
};

const mapStateToProps = ({ meals }, ownProps) => {
	const mealId = ownProps.navigation.getParam("mealId");
	const meal = getMealById(meals.allMeals, mealId);
	return {
		meal: meal,
		isFavorite: !!meals.favoriteMeals.find((fav) => fav.mealId === meal.mealId),
	};
};
export default connect(mapStateToProps)(MealDetailScreen);
