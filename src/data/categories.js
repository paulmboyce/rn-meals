const CATEGORIES = [
	{ id: Math.random().toString(), name: "Vegan", categoryId: "CAT1" },
	{ id: Math.random().toString(), name: "Vegetarian", categoryId: "CAT2" },
	{ id: Math.random().toString(), name: "Keto", categoryId: "CAT3" },
	{ id: Math.random().toString(), name: "Planet Friendly", categoryId: "CAT4" },
];

const getCategory = (categoryId) => {
	return CATEGORIES.find((item) => item.categoryId === categoryId);
};

export { CATEGORIES, getCategory };
