import * as React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { HeaderButtons, HeaderButton } from "react-navigation-header-buttons";

import { Theme } from "../styles/Theme";

const buttonColor =
	Platform.OS === "ios" ? Theme.primaryColor : Theme.backgroundColor;

// define IconComponent, color, sizes and OverflowIcon in one place
const MaterialHeaderButton = (props) => (
	<HeaderButton
		IconComponent={MaterialIcons}
		iconSize={23}
		color={buttonColor}
		{...props}
	/>
);

const MaterialHeaderButtons = (props) => {
	return (
		<HeaderButtons HeaderButtonComponent={MaterialHeaderButton} {...props} />
	);
};

export default MaterialHeaderButtons;
