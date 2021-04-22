import React from "react";
import { View, FlatList, Text, useWindowDimensions } from "react-native";

import { ThemeStyles, Theme } from "../styles/Theme";
import { CATEGORIES } from "../data/categories";
import GridDisplay from "../components/GridDisplay";

const CategoriesScreen = ({ navigation }) => {
	const window = useWindowDimensions();

	const renderCategory = ({ index, item }) => {
		return (
			<GridDisplay
				navigation={navigation}
				color={item.color}
				name={item.name}
				routeName="CategoryMeals"
				routeParams={{
					categoryId: item.categoryId,
				}}
			/>
		);
	};

	/*
			

*/

	console.log("Abou tot redern CAtegories Screen....");
	return (
		<View style={ThemeStyles.screen}>
			<FlatList
				data={CATEGORIES}
				renderItem={renderCategory}
				keyExtractor={(item) => item.id}
				numColumns={2}
			/>
		</View>
	);
};

CategoriesScreen.navigationOptions = {
	title: "Meals App: Categories",
};
export default CategoriesScreen;
