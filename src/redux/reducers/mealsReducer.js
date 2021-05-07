import { MEALS } from "../../data/meals";
import { ADD_FAVORITE, DELETE_FAVORITE, APPLY_FILTERS } from "../actions";

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
		const result = { ...oldState, ...{ favoriteMeals: newFavs } };
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

	if (type === APPLY_FILTERS) {
		const { filters } = payload;
		console.log("mealsReducer APPLY_FILTERS: ", filters);

		const filterValues = Object.values(filters);
		console.log("filter values ", filterValues);
		const allFalse = (accumulator, currentValue) => accumulator || currentValue;
		const filtersOff = !!!filterValues.reduce(allFalse);
		console.log("filtersOff: ", filtersOff);
		if (filtersOff) {
			return defaultMeals;
		}

		const filterNames = Object.keys(filters);
		console.log("filterNames:", filterNames);
		let filteredMeals = [...MEALS];
		filterNames.forEach((filterName) => {
			if (filters[filterName] === true) {
				console.log("filterName: ", filterName);
				filteredMeals = filteredMeals.filter((meal) => {
					console.log(
						"Processing meal ",
						meal.name,
						" - ",
						meal[filterName],
						" ..."
					);
					return meal[filterName] === filters[filterName];
				});
				console.log("NUM FILTERED MEALS: ", filterName, filteredMeals.length);
			}
		});
		console.log("NUM FILTERED MEALS (ALL): ", filteredMeals.length);

		const result = { ...oldState, ...{ allMeals: filteredMeals } };
		return result;
	}

	return oldState;
};

export { mealsReducer };
