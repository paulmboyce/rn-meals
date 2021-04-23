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

import { ThemeStyles, Theme } from "../styles/Theme";
import { getMeal, getFilters } from "../data/meals";
import { ThemeColors } from "react-navigation";

const MealDetailScreen = ({ navigation }) => {
	const mealId = navigation.getParam("mealId");
	const meal = getMeal(mealId);
	console.log("MEAL: ", meal);
	const filters = getFilters(meal);
	console.log("MEAL filters: ", filters);

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
		list: {
			justifyContent: "center",
			alignItems: "flex-start",
		},
		homeButtonContainer: {
			width: "100%",
			marginVertical: 60,
			borderTopColor: Theme.primaryColor,
			borderTopWidth: 1,
		},
		homeButton: {
			paddingVertical: 20,
			alignItems: "center",
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
				<Text style={ThemeStyles.text} key={ingredient}>
					- {ingredient}
				</Text>
			);
		});
	};
	const renderSteps = () => {
		return meal.steps.map((step, index) => {
			return (
				<Text style={ThemeStyles.text} key={step}>
					{index + 1}: {step}
				</Text>
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
					<View style={{ ...styles.list, flexDirection: "row" }}>
						{renderTags()}
					</View>
					<Text style={ThemeStyles.textTitleSmall}>Ingredients:</Text>
					<View style={styles.list}>{renderIngredients()}</View>
					<Text style={ThemeStyles.textTitleSmall}>Preparation Steps:</Text>
					<View style={styles.list}>{renderSteps()}</View>
				</View>
				<View style={styles.homeButtonContainer}>
					<View style={styles.homeButton}>
						<Button title="Go Home" onPress={() => navigation.popToTop()} />
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = {
	title: "Meal Details",
};
export default MealDetailScreen;
