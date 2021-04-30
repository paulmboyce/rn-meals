import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	useWindowDimensions,
	Image,
	ScrollView,
} from "react-native";
import { Item } from "react-navigation-header-buttons";

import { ThemeStyles, Theme } from "../styles/Theme";
import { getMealById, getFiltersForMeal } from "../data/meals";
import MaterialHeaderButtons from "../navigation/HeaderButtons";

const getMeal = (navigation) => {
	const mealId = navigation.getParam("mealId");
	return getMealById(mealId);
};

const MealDetailScreen = ({ navigation }) => {
	const meal = getMeal(navigation);
	const filters = getFiltersForMeal(meal);

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
			borderWidth: 1,
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
	const meal = getMeal(navigation);

	return {
		headerTitle: meal.name,
		headerRight: () => {
			return (
				<MaterialHeaderButtons>
					<Item
						title="Add Favorite"
						iconName="star"
						onPress={() => console.log("PRESSED favorite")}
					/>
				</MaterialHeaderButtons>
			);
		},
	};
};

export default MealDetailScreen;
