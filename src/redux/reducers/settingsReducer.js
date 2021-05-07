import { SAVE_SETTINGS } from "../actions";

const defaultSettings = {
	isGlutenFree: false,
	isLactoseFree: false,
	isVegan: false,
	isVegetarian: false,
};

const settingsReducer = (oldState = defaultSettings, action) => {
	const { type, payload } = action;
	if (type === SAVE_SETTINGS) {
		return { ...oldState, ...payload.settings };
	}
	return oldState;
};

export { settingsReducer };
