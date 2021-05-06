export const SAVE_SETTINGS = "SAVE_SETTINGS";
export const SAVE_MEAL = "SAVE_MEAL";
export const GET_FAVORITES = "GET_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

const saveSettingsAction = (settings) => {
	return { type: SAVE_SETTINGS, payload: { settings } };
};

const addFavoriteAction = (meal) => {
	console.log("Dispatching addFavoriteAction: ", meal.name, meal.id);
	return { type: ADD_FAVORITE, payload: { meal } };
};
const deleteFavoriteAction = (meal) => {
	console.log("Dispatching deleteFavoriteAction: ", meal.name, meal.id);
	return { type: DELETE_FAVORITE, payload: { meal } };
};
const saveMealAction = (meal) => {
	console.log("Dispatching saveMealAction: ", meal.name, meal.id);
	return { type: SAVE_MEAL, payload: { meal } };
};
const getFavoritesAction = () => {
	console.log("Dispatching getFavoritesAction... ");
	return { type: GET_FAVORITES, payload: {} };
};

export {
	saveSettingsAction,
	saveMealAction,
	getFavoritesAction,
	addFavoriteAction,
	deleteFavoriteAction,
};
