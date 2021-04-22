class Category {
	constructor(categoryId, name, color) {
		{
			(this.id = Math.random().toString()),
				(this.name = name),
				(this.color = color),
				(this.categoryId = categoryId);
		}
	}
}

export default Category;
