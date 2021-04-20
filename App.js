import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { loadAsync as loadFontsAsync } from "expo-font";

const fetchFonts = () => {
	console.log("Fetching fonts...");
	return loadFontsAsync({
		OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
		OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
	});
};

export default function App() {
	const [isReady, setIsReady] = useState(false);

	if (!isReady) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => {
					setIsReady(true);
					console.log("Starting App...");
				}}
				onError={(err) => console.log(err)}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
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
