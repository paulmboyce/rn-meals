export const SAVE_SETTINGS = "SAVE_SETTINGS";

const saveSettingsAction = (settings) => {
	return { type: SAVE_SETTINGS, payload: { settings } };
};

export { saveSettingsAction };
