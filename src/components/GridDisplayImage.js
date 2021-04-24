import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
	useWindowDimensions,
	ImageBackground,
} from "react-native";

import { Theme, ThemeStyles } from "../styles/Theme";

const GridDisplayImage = (params) => {
	const window = useWindowDimensions();
	const { navigation, color, name, routeName, routeParams, imageUrl } = params;

	let Touchable = TouchableOpacity;
	if (Platform.OS === "android" && Platform.Version >= 21) {
		Touchable = TouchableNativeFeedback;
	}

	const styles = StyleSheet.create({
		category: {
			flex: 1,
			margin: 4,
			minHeight: window.width * 0.55,
			width: window.width * 0.95,
			overflow: "hidden",
		},
		textRight: {
			fontFamily: "OpenSansBold",
			textAlign: "right",
			fontSize: window.height < 600 ? 15 : 19,
			color: Theme.backgroundColor,
			padding: 5,
		},
		overlay: {
			backgroundColor: Theme.primaryColor80Transparent,
		},
		backgroundImage: {
			width: "100%",
			height: "100%",
			justifyContent: "flex-end",
			alignItems: "flex-end",
		},
	});

	const renderBackgroundImageAndText = () => {
		if (imageUrl) {
			return (
				<ImageBackground
					style={styles.backgroundImage}
					source={{ uri: imageUrl }}
				>
					<View style={styles.overlay}>
						<Text style={styles.textRight}>{name}</Text>
					</View>
				</ImageBackground>
			);
		} else {
			return <Text style={styles.textRight}>{name}</Text>;
		}
	};

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
				<View style={styles.category}>{renderBackgroundImageAndText()}</View>
			</Touchable>
		</View>
	);
};

export default GridDisplayImage;
