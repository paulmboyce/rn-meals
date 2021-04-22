const CATEGORIES = [
	{
		id: Math.random().toString(),
		name: "Vegan",
		color: "lightgreen",
		categoryId: "CAT1",
	},
	{
		id: Math.random().toString(),
		name: "Vegetarian",
		color: "wheat",
		categoryId: "CAT2",
	},
	{
		id: Math.random().toString(),
		name: "Keto",
		color: "blue",
		categoryId: "CAT3",
	},
	{
		id: Math.random().toString(),
		name: "Planet Friendly",
		color: "green",
		categoryId: "CAT4",
	},
	{
		id: Math.random().toString(),
		name: "Paleo",
		color: "pink",
		categoryId: "CAT5",
	},
	{
		id: Math.random().toString(),
		name: "Pescatarian",
		color: "cornflowerblue",
		categoryId: "CAT6",
	},
	{
		id: Math.random().toString(),
		name: "Meat",
		color: "red",
		categoryId: "CAT7",
	},
];

const getCategory = (categoryId) => {
	const category = CATEGORIES.find((item) => item.categoryId === categoryId);
	if (category === undefined) {
		throw Error("Oops! Could not fnd category for categoryId: ", categoryId);
	}
	return category;
};

export { CATEGORIES, getCategory };
