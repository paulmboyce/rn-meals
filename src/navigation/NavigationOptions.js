import { Platform } from "react-native";

import { Theme, ThemeStyles } from "../styles/Theme";

const getNavigationOptions = () => {
	const navigationHeaderStyle = Platform.select({
		android: ThemeStyles.navigationHeaderStyleAndroid,
		ios: ThemeStyles.navigationHeaderStyleIOS,
	});

	return {
		title: "Best Meals App",
		headerStyle: navigationHeaderStyle,
		headerTintColor:
			Platform.OS === "android" ? Theme.backgroundColor : Theme.primaryColor,
	};
};

export default getNavigationOptions;
