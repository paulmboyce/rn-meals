import { Image } from "react-native";
import { loadAsync as loadFontsAsync } from "expo-font";
import { getImageUrls } from "../data/mealsUtils";

const fetchAssets = () => {
	return Promise.all([fetchFonts(), ...fetchOnlineImages()]);
};

const fetchFonts = async () => {
	console.log("Fetching fonts...");
	return await loadFontsAsync({
		OpenSans: require("../../assets/fonts/OpenSans-Regular.ttf"),
		OpenSansBold: require("../../assets/fonts/OpenSans-Bold.ttf"),
	});
};

const fetchOnlineImages = () => {
	console.log("Pre-loading images...");
	const imageUrls = getImageUrls();
	return imageUrls.map(async (url) => await Image.prefetch(url));
};

export { fetchAssets };
