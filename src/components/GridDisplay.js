import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
	useWindowDimensions,
} from "react-native";

import { Theme, ThemeStyles } from "../styles/Theme";

const GridDisplay = (params) => {
	const window = useWindowDimensions();
	const { navigation, color, name, routeName, routeParams } = params;

	let Touchable = TouchableOpacity;
	if (Platform.OS === "android" && Platform.Version >= 21) {
		Touchable = TouchableNativeFeedback;
	}

	const styles = StyleSheet.create({
		category: {
			flex: 1,
			margin: 12,
			backgroundColor: Theme.backgroundColor,
			borderWidth: 1,
			borderRadius: 10,
			padding: 15,
			minHeight: window.width * 0.35,
			width: window.width * 0.4,
			justifyContent: "flex-end",
			alignItems: "flex-end",
			shadowColor: "black",
			shadowRadius: 10,
			shadowOpacity: 0.26,
			shadowOffset: { width: 0, height: 2 },
			elevation: 3,
			overflow: "hidden",
		},
		textRight: {
			fontFamily: "OpenSansBold",
			textAlign: "right",
			fontSize: window.height < 600 ? 15 : 19,
		},
	});

	return (
		<View style={{ overflow: "hidden", borderRadius: 10 }}>
			<Touchable
				style={{ flex: 1 }}
				onPress={() => {
					navigation.navigate({
						routeName: routeName,
						params: routeParams,
					});
				}}
			>
				<View
					style={{
						...styles.category,
						backgroundColor: color,
						borderColor: color,
					}}
				>
					<Text style={styles.textRight}>{name}</Text>
				</View>
			</Touchable>
		</View>
	);
};

export default GridDisplay;
