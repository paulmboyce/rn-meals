import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ToggleMenuDrawer from "../navigation/ToggleMenuDrawer";

const FiltersScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.text}>This is indeed the Filters Screen </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontFamily: "OpenSans",
	},
});

FiltersScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Settings",
		headerLeft: () => {
			return <ToggleMenuDrawer navigation={navigation} />;
		},
	};
};

export default FiltersScreen;
