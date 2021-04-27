import React from "react";
import MaterialHeaderButtons from "./HeaderButtons";
import { Item } from "react-navigation-header-buttons";

const ToggleMenuDrawer = ({ navigation }) => {
	return (
		<MaterialHeaderButtons>
			<Item
				title="Menu"
				iconName="menu"
				onPress={() => {
					navigation.toggleDrawer();
				}}
			/>
		</MaterialHeaderButtons>
	);
};

export default ToggleMenuDrawer;
