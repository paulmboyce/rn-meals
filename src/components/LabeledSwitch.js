import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

import { ThemeStyles } from "../styles/Theme";
import ThemeSwitch from "./ThemeSwitch";

const LabeledSwitch = ({ style, label, initialValue, onValueChange }) => {
	const window = useWindowDimensions();
	const vWidth = window.width;

	const styles = StyleSheet.create({
		switchWrapper: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			width: vWidth * 0.8,
			marginVertical: 10,
			padding: 10,
		},
	});

	return (
		<View style={{ ...styles.switchWrapper, ...style }}>
			<Text style={ThemeStyles.text}>{label}</Text>
			<ThemeSwitch
				initialValue={initialValue}
				onValueChange={onValueChange}
			></ThemeSwitch>
		</View>
	);
};

export default LabeledSwitch;
