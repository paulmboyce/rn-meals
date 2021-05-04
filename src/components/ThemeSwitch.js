import React, { useState } from "react";
import { Switch } from "react-native";

import { Theme } from "../styles/Theme";

const ThemeSwitch = ({ initialValue, onValueChange }) => {
	const [isEnabled, setIsEnabled] = useState(
		initialValue ? initialValue : false
	);
	const toggleSwitch = (val) => {
		setIsEnabled(val);
		onValueChange(val);
	};

	return (
		<Switch
			trackColor={{ true: Theme.primaryColor }}
			value={isEnabled}
			onValueChange={toggleSwitch}
		/>
	);
};

export default ThemeSwitch;
