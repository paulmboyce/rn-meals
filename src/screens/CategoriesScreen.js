import React from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import { Item } from "react-navigation-header-buttons";

import { ThemeStyles } from "../styles/Theme";
import GridDisplay from "../components/GridDisplay";
import ToggleMenuDrawer from "../navigation/ToggleMenuDrawer";

const CategoriesScreen = ({ navigation }) => {
	const allCategories = useSelector((state) => {
		return state.categories;
	});

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
					categoryName: item.name,
				}}
			/>
		);
	};

	return (
		<View style={ThemeStyles.screen}>
			<FlatList
				data={allCategories}
				renderItem={renderCategory}
				keyExtractor={(item) => item.id}
				numColumns={2}
			/>
		</View>
	);
};

CategoriesScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Meals App: Categories",
		headerLeft: () => {
			return <ToggleMenuDrawer navigation={navigation} />;
		},
	};
};

export default CategoriesScreen;
