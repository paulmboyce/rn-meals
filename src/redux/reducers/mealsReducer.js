import { MEALS } from "../../data/meals";
import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions";

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
		const newFavs = [...oldState.favoriteMeals, payload.meal];
		console.log("NEW FAVS: ", newFavs.length);
		const result = { ...oldState, ...{ favoriteMeals: newFavs } };
		console.log("RESULT FAVS: ", result.favoriteMeals.length);

		return result;
	}
	if (type === DELETE_FAVORITE) {
		console.log("mealsReducer DELETE_FAVORITE: ", payload.meal.name);
		// The following takes 2 steps as state object contains many arrays.
		const favoriteMeals = oldState.favoriteMeals.filter(
			(meal) => meal.id !== payload.meal.id
		);
		const result = { ...oldState, ...{ favoriteMeals: favoriteMeals } };
		console.log("RESULT FAVS: ", result.favoriteMeals.length);
		return result;
	}

	return oldState;
};

export { mealsReducer };
