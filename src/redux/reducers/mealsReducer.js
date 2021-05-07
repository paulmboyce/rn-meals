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
		// The following takes 2 steps as state object contains many arrays.
		const newFavs = [...oldState.favoriteMeals, payload.meal];
		const result = { ...oldState, ...{ favoriteMeals: newFavs } };
		return result;
	}
	if (type === DELETE_FAVORITE) {
		// The following takes 2 steps as state object contains many arrays.
		const favoriteMeals = oldState.favoriteMeals.filter(
			(meal) => meal.id !== payload.meal.id
		);
		const result = { ...oldState, ...{ favoriteMeals: favoriteMeals } };
		return result;
	}

	if (type === APPLY_FILTERS) {
		const { filters } = payload;

		const showAllMeals = checkForFilters(filters);
		if (showAllMeals) {
			console.log(
				"Filters turned OFF, showing all meals..",
				oldState.allMeals.length
			);
			return {
				favoriteMeals: [...oldState.favoriteMeals],
				allMeals: [...MEALS],
			};
		}

		let filteredMeals = [];
		const filterNames = Object.keys(filters);
		filterNames.forEach((filterName) => {
			filteredMeals = [
				...filteredMeals,
				...getMealsByFilter(MEALS, filters, filterName),
			];
		});
		filteredMeals = dedupeArray(filteredMeals);
		console.log("NUM FILTERED MEALS (ALL, de-duped): ", filteredMeals.length);
		return { ...oldState, ...{ allMeals: filteredMeals } };
	}

	return oldState;
};

const dedupeArray = (someArray) => {
	return [...new Set(someArray)];
};
const getMealsByFilter = (meals, filters, filterName) => {
	let filteredMeals = [];
	if (filters[filterName] === true) {
		console.log(`------ Filter is ON: [${filterName}] --------------`);
		filteredMeals = meals.filter((meal) => {
			//			console.log(`[${filterName}] -> [${meal[filterName]}] for ${meal.name}`);
			return meal[filterName] === filters[filterName];
		});
		console.log(`NUM ${filterName} meals: ${filteredMeals.length}`);
	}
	filteredMeals.forEach((meal) => console.log(`Including:  ${meal.name}`));

	return filteredMeals;
};

const checkForFilters = (filterSettings) => {
	const filterValues = Object.values(filterSettings);
	const allFalse = (accumulator, currentValue) => accumulator || currentValue;
	return !!!filterValues.reduce(allFalse);
};

export { mealsReducer };
