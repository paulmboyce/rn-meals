import { MEALS } from "./meals";

const getMealsByCategory = (allMeals, categoryId) => {
	const meals = allMeals.filter((meal) => {
		return meal.categoryIds.includes(categoryId);
	});
	if (meals === undefined) {
		throw Error("Oops! Could not fnd meals for categoryId: ", categoryId);
	}
	return meals;
};

const getMealsByFilter = (allMeals, filterName) => {
	const meals = allMeals.filter((meal) => {
		return meal[filterName] === true;
	});
	if (meals === undefined) {
		throw Error("Oops! Could not fnd meals for: ", filterName);
	}
	return meals;
};

const getMealById = (allMeals, mealId) => {
	const meal = allMeals.find((meal) => {
		return meal.id === mealId;
	});
	if (meal === undefined) {
		throw Error("Oops! Could not find meal for mealId: ", mealId);
	}
	return meal;
};

const getImageUrls = () => {
	const imageUrls = MEALS.map((meal) => {
		return meal.imageUrl;
	});
	if (imageUrls === undefined) {
		throw Error("Oops! Could not find images");
	}
	return imageUrls;
};

const getFiltersForMeal = (meal) => {
	const filters = [
		{ name: "isGlutenFree", value: meal.isGlutenFree },
		{ name: "isLactoseFree", value: meal.isLactoseFree },
		{ name: "isVegan", value: meal.isVegan },
		{ name: "isVegetarian", value: meal.isVegetarian },
	];
	return filters;
};

export {
	getMealsByCategory,
	getMealById,
	getFiltersForMeal,
	getMealsByFilter,
	getImageUrls,
};
