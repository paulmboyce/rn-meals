import { MEALS } from "../../data/meals";
import {
	getMealsByCategory,
	getMealById,
	getFiltersForMeal,
	getMealsByFilter,
} from "../../data/mealsUtils";

const defaultMeals = {
	allMeals: MEALS,
	categoryMeals: [],
	filteredMeals: [],
	favoriteMeals: [],
};

const mealsReducer = (oldState = defaultMeals, action) => {
	console.log("ENTERED: mealsReducer()..");
	const { type, payload } = action;
	if (type === "SOME ACTION TYPE") {
		console.log("REDUCING MEALS: ", payload);
		return { ...oldState, ...payload.settings };
	}
	return oldState;
};

export { mealsReducer };
