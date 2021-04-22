class Meal {
	constructor(
		categoryIds,
		title,
		affordability,
		complexity,
		imageUrl,
		duration,
		ingredients,
		steps,
		isGlutenFree = false,
		isVegan = false,
		isVegetarian = false,
		isLactoseFree = false
	) {
		this.id = Math.random().toString();
		this.categoryIds = categoryIds;
		this.title = title;
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
	}
}

export default Meal;
