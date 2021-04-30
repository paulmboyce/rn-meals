import React from "react";
import { StyleSheet, View, Button } from "react-native";

import { Theme, ThemeStyles } from "../styles/Theme";

const ThemeButton = (props) => {
	return (
		<View style={{ ...styles.buttonWrapper, ...props.style }}>
			<Button {...props} title={props.title} color={Theme.backgroundColor} />
		</View>
	);
};

const styles = StyleSheet.create({
	buttonWrapper: {
		backgroundColor: Theme.primaryColor,
		fontFamily: Theme.fontFamily,
	},
});

export default ThemeButton;
