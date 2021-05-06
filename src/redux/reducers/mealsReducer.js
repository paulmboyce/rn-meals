import { MEALS } from "../../data/meals";
import {
	SAVE_MEAL,
	GET_FAVORITES,
	ADD_FAVORITE,
	DELETE_FAVORITE,
} from "../actions";
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
	favoriteMeals: [],
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
		console.log(
			"mealsReducer SAVE_MEAL: ",
			payload.meal.name,
			payload.meal.isFavorite
		);
		// The following takes two steps because we have a
		// state object that contains various arrays.
		const allMeals = oldState.allMeals.map((meal) =>
			replaceItemById(meal, payload.meal)
		);
		const result = { ...oldState, ...{ allMeals: allMeals } };
		return result;
	}
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
