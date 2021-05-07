export const SAVE_SETTINGS = "SAVE_SETTINGS";
export const GET_FAVORITES = "GET_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const APPLY_FILTERS = "APPLY_FILTERS";

const saveSettingsAction = (settings) => {
	return { type: SAVE_SETTINGS, payload: { settings } };
};

const addFavoriteAction = (meal) => {
	return { type: ADD_FAVORITE, payload: { meal } };
};

const deleteFavoriteAction = (meal) => {
	return { type: DELETE_FAVORITE, payload: { meal } };
};

const getFavoritesAction = () => {
	return { type: GET_FAVORITES, payload: {} };
};

const applyFiltersAction = (filters) => {
	return { type: APPLY_FILTERS, payload: { filters } };
};

export {
	saveSettingsAction,
	getFavoritesAction,
	addFavoriteAction,
	deleteFavoriteAction,
	applyFiltersAction,
};
