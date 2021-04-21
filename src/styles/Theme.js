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
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Theme.backgroundColor,
	},
	navigationHeaderStyleIOS: {},
	navigationHeaderStyleAndroid: {
		backgroundColor: Theme.headerBackgroundColor,
	},
});

export { Theme, ThemeStyles };
