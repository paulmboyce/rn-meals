import { Platform } from "react-native";

import { ThemeStyles } from "../styles/Theme";

const getNavigationOptions = () => {
	const navigationHeaderStyle = Platform.select({
		android: ThemeStyles.navigationHeaderStyleAndroid,
		ios: ThemeStyles.navigationHeaderStyleIOS,
	});

	return {
		title: "Override title in component",
		headerStyle: navigationHeaderStyle,
		headerTintColor: Platform.OS === "android" ? "white" : "#4a148c",
	};
};

export default getNavigationOptions;
