const CATEGORIES = [
	{ id: Math.random().toString(), name: "Vegan", categoryId: "CAT1" },
	{ id: Math.random().toString(), name: "Vegetarian", categoryId: "CAT2" },
	{ id: Math.random().toString(), name: "Keto", categoryId: "CAT3" },
	{ id: Math.random().toString(), name: "Planet Friendly", categoryId: "CAT4" },
];

const getCategory = (categoryId) => {
	const category = CATEGORIES.find((item) => item.categoryId === categoryId);
	if (category === undefined) {
		throw Error("Oops! Could not fnd category for categoryId: ", categoryId);
	}
	return category;
};

export { CATEGORIES, getCategory };
