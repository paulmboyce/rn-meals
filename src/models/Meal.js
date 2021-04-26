class Meal {
	constructor(
		mealId,
		categoryIds,
		name,
		affordability,
		complexity,
		imageUrl,
		duration,
		ingredients,
		steps,
		isGlutenFree,
		isVegan,
		isVegetarian,
		isLactoseFree,
		isFavorite
	) {
		this.id = mealId;
		this.categoryIds = categoryIds;
		this.name = name;
		this.affordability = affordability;
		this.complexity = complexity;
		this.imageUrl = imageUrl;
		this.duration = duration;
		this.ingredients = ingredients;
		this.steps = steps;
		this.isGlutenFree = isGlutenFree;
		this.isVegan = isVegan;
		this.isVegetarian = isVegetarian;
		this.isLactoseFree = isLactoseFree;
		this.isFavorite = isFavorite;
	}
}

export default Meal;
