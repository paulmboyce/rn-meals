import { MEALS } from "../../data/meals";
import { SAVE_MEAL, ADD_FAVORITE, DELETE_FAVORITE } from "../actions";

const defaultMeals = {
	allMeals: MEALS,
	favoriteMeals: [],
	//	categoryMeals: [],
	//	filteredMeals: [],
};

const replaceItemById = (oldItem, newItem) => {
	if (oldItem.id === newItem.id) {
		return newItem;
	}
	return oldItem;
};

const mealsReducer = (oldState = defaultMeals, action) => {
	const { type, payload } = action;

	if (type === ADD_FAVORITE) {
		console.log("mealsReducer ADD_FAVORITE: ", payload.meal.name);
		// The following takes 2 steps as state object contains many arrays.
		oldState.favoriteMeals.push(payload.meal);
		const favoriteMeals = [...oldState.favoriteMeals];

		const result = { ...oldState, ...{ favoriteMeals: favoriteMeals } };
		console.log("FAVORITES: ", result.favoriteMeals.length);
		return result;
	}
	if (type === DELETE_FAVORITE) {
		console.log("mealsReducer DELETE_FAVORITE: ", payload.meal.name);
		// The following takes 2 steps as state object contains many arrays.
		const favoriteMeals = oldState.favoriteMeals.filter(
			(meal) => meal.id !== payload.meal.id
		);
		const result = { ...oldState, ...{ favoriteMeals: favoriteMeals } };
		return result;
	}

	return oldState;
};

export { mealsReducer };
