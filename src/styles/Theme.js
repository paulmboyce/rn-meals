import { StyleSheet } from "react-native";

const Colors = {
	primaryColor: "#4a148c",
	secondaryColor: "black",
	backgroundColor: "linen",
};

const Theme = {
	primaryColor: Colors.primaryColor,
	secondaryColor: Colors.secondaryColor,
	backgroundColor: Colors.backgroundColor,
	headerBackgroundColor: Colors.primaryColor,
};

const ThemeStyles = StyleSheet.create({
	navigationHeaderStyleIOS: {},
	navigationHeaderStyleAndroid: {
		backgroundColor: Theme.headerBackgroundColor,
	},
});

export { Theme, ThemeStyles };
