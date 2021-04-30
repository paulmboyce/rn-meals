import React, { useState } from "react";
import { Switch } from "react-native";

import { Theme } from "../styles/Theme";

const ThemeSwitch = (props) => {
	const [isEnabled, setIsEnabled] = useState(
		props.initialValue ? props.value : false
	);
	const toggleSwitch = (val) => {
		setIsEnabled(val);
		props.onValueChange(val);
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
