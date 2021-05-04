import { MEALS } from "../../data/meals";
import {
	getMealsByCategory,
	getMealById,
	getFiltersForMeal,
	getMealsByFilter,
} from "../../data/mealsUtils";

const defaultMeals = {
	meals: MEALS,
	categoryMeals: [],
	filteredMeals: [],
	favoriteMeals: [],
};

const mealsReducer = (oldState = defaultMeals, action) => {
	const { type, payload } = action;
	if (type === "SOME ACTION TYPE") {
		console.log("REDUCING SAVE_SETTINGS: ", payload);
		return { ...oldState, ...payload.settings };
	}
	return oldState;
};

export { mealsReducer };
