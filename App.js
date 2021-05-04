import React, { useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { loadAsync as loadFontsAsync } from "expo-font";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsNavigator from "./src/navigation/MealsNavigator";
import { getImageUrls } from "./src/data/mealsUtils";
import { settingsReducer } from "./src/redux/reducers/settings";

const fetchAssets = () => {
	return Promise.all([fetchFonts(), ...fetchOnlineImages()]);
};

const fetchFonts = async () => {
	console.log("Fetching fonts...");
	return await loadFontsAsync({
		OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
		OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
	});
};

const fetchOnlineImages = () => {
	console.log("Pre-loading images...");
	const imageUrls = getImageUrls();
	return imageUrls.map(async (url) => await Image.prefetch(url));
};

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
	/* FOR TEST APPLOADING..
	return (
		<View style={styles.container}>
			<Text style={{ fontFamily: "OpenSans" }}>Hello</Text>
		</View>
	);
	*/

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
