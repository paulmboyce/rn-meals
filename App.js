import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { loadAsync as loadFontsAsync } from "expo-font";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsNavigator from "./src/navigation/MealsNavigator";
import { getImageUrls } from "./src/data/meals";
import { settingsReducer } from "./src/redux/reducers";

const fetchAssets = () => {
	return Promise.all([fetchFonts(), ...fetchOnlineImages()]);
};

const fetchFonts = () => {
	console.log("Fetching fonts...");
	return loadFontsAsync({
		OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
		OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
	});
};

const fetchOnlineImages = () => {
	console.log("Pre-loading images...");
	const imageUrls = getImageUrls();
	return imageUrls.map((url) => Image.prefetch(url));
};

export default function App() {
	const [isReady, setIsReady] = useState(false);

	if (!isReady) {
		return (
			<AppLoading
				startAsync={fetchAssets}
				onFinish={() => {
					setIsReady(true);
					console.log("Starting App...");
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
