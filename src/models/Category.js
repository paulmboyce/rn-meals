class Category {
	constructor(name, color, categoryId) {
		{
			(this.id = Math.random().toString()),
				(this.name = name),
				(this.color = color),
				(this.categoryId = categoryId);
		}
	}
}

export default Category;
