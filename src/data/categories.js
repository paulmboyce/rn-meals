import Category from "../models/Category";

const CATEGORIES = [
	new Category("Italian", "pink", "CAT1"),
	new Category("Quick & Easy", "red", "CAT2"),
	new Category("Hamburgers", "wheat", "CAT3"),
	new Category("German", "yellow", "CAT4"),
	new Category("Vietamese", "cornflowerblue", "CAT5"),
	new Category("Bakery", "lightgreen", "CAT6"),
	new Category("Sweet Treats", "salmon", "CAT7"),
];

const getCategory = (categoryId) => {
	const category = CATEGORIES.find((item) => item.categoryId === categoryId);
	if (category === undefined) {
		throw Error("Oops! Could not fnd category for categoryId: ", categoryId);
	}
	return category;
};

export { CATEGORIES, getCategory };
