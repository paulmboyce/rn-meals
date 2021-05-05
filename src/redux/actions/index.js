export const SAVE_SETTINGS = "SAVE_SETTINGS";
export const SAVE_MEAL = "SAVE_MEAL";

const saveSettingsAction = (settings) => {
	return { type: SAVE_SETTINGS, payload: { settings } };
};

const saveMealAction = (meal) => {
	console.log("Dispatching saveMealAction: ", meal.name, meal.id);
	return { type: SAVE_MEAL, payload: { meal } };
};

export { saveSettingsAction, saveMealAction };
