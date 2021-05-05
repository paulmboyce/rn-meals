import { MEALS } from "../../data/meals";
import { SAVE_MEAL } from "../actions";
import {
	getMealsByCategory,
	getMealById,
	getFiltersForMeal,
	getMealsByFilter,
} from "../../data/mealsUtils";

const defaultMeals = {
	allMeals: MEALS,
	//	categoryMeals: [],
	//	filteredMeals: [],
	//	favoriteMeals: [],
};

const replaceItemById = (oldItem, newItem) => {
	if (oldItem.id === newItem.id) {
		return newItem;
	}
	return oldItem;
};

const mealsReducer = (oldState = defaultMeals, action) => {
	const { type, payload } = action;

	if (type === SAVE_MEAL) {
		console.log("mealsReducer SAVE_MEAL: ", payload.meal.name);
		// The following takes two steps because we have a
		// state object that contains various arrays.
		const allMeals = oldState.allMeals.map((meal) =>
			replaceItemById(meal, payload.meal)
		);
		const result = { ...oldState, ...{ allMeals: allMeals } };
		return result;
	}

	return oldState;
};

export { mealsReducer };
