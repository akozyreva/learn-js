function getReciepe() {
	setTimeout(() => {
		const recipeID = [523, 883, 432, 974];
		console.log(recipeID);

		setTimeout((id) => {
			const recipe = {
				title: 'Pasta',
				publisher: 'John'
			};
			console.log(`${id} ${recipe.title}`);

			setTimeout((publisher) => {
				const recipe = {
					title: 'Pizza',
					publisher: 'John'
				}
				console.log(recipe);
			}, 1500, recipe.publisher);

		}, 1000, recipeID[2]);

	}, 1500);
}

getReciepe();
