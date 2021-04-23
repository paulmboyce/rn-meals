import { StyleSheet } from "react-native";

const Colors = {
	primaryColor: "#4a148c",
	secondaryColor: "#880e4f",
	backgroundColor: "white",
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
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Theme.backgroundColor,
	},
	box1: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	box2: {
		flex: 2,
		justifyContent: "center",
		alignItems: "center",
	},
	box2Left: {
		flex: 2,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	navigationHeaderStyleIOS: {},
	navigationHeaderStyleAndroid: {
		backgroundColor: Theme.headerBackgroundColor,
	},
	text: {
		fontFamily: "OpenSans",
	},
	textBold: {
		fontFamily: "OpenSansBold",
	},
	textTitle: {
		fontFamily: "OpenSansBold",
		color: Theme.primaryColor,
		fontSize: 22,
		paddingVertical: 10,
	},
	textTitleSmall: {
		fontFamily: "OpenSansBold",
		color: Theme.secondaryColor,
		fontSize: 18,
		paddingVertical: 7,
	},
});

export { Theme, ThemeStyles };
