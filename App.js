import React, { useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsNavigator from "./src/navigation/MealsNavigator";
import { settingsReducer } from "./src/redux/reducers/settingsReducer";
import { mealsReducer } from "./src/redux/reducers/mealsReducer";
import { fetchAssets } from "./src/utils/init";

export default function App() {
	const [isReady, setIsReady] = useState(false);

	if (!isReady) {
		return (
			<AppLoading
				startAsync={fetchAssets}
				onFinish={() => {
					console.log("Starting App, setting isReady [TRUE]...");
					setIsReady(true);
				}}
				onError={(err) => console.log(err)}
			/>
		);
	}

	return (
		<Provider
			store={createStore(
				combineReducers({
					settings: settingsReducer,
					meals: mealsReducer,
				})
			)}
		>
			<MealsNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
