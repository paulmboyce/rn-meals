import React, { useState } from "react";
import { Switch } from "react-native";

import { Theme } from "../styles/Theme";

const ThemeSwitch = (props) => {
	const [isEnabled, setIsEnabled] = useState(
		props.initialValue ? props.value : false
	);
	const toggleSwitch = () => {
		setIsEnabled((oldVal) => !oldVal);
		console.log(`Switch toggled from ${isEnabled} to ${!isEnabled}`);
		props.onValueChange(isEnabled);
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
