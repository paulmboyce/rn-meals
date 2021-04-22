const CATEGORIES = [
	{
		id: Math.random().toString(),
		name: "Italian",
		color: "pink",
		categoryId: "CAT1",
	},
	{
		id: Math.random().toString(),
		name: "Quick & Easy",
		color: "red",
		categoryId: "CAT2",
	},
	{
		id: Math.random().toString(),
		name: "Hamburgers",
		color: "wheat",
		categoryId: "CAT3",
	},
	{
		id: Math.random().toString(),
		name: "German",
		color: "yellow",
		categoryId: "CAT4",
	},
	{
		id: Math.random().toString(),
		name: "Vietamese",
		color: "cornflowerblue",
		categoryId: "CAT5",
	},
	{
		id: Math.random().toString(),
		name: "Bakery",
		color: "lightgreen",
		categoryId: "CAT6",
	},
	{
		id: Math.random().toString(),
		name: "Sweet Treats",
		color: "salmon",
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
