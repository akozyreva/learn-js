/*function getReciepe() {
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
*/
const getIDs = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([523, 883, 432, 974]);
	}, 1500);
});

const getRecipe = (recID) => {
	return new Promise((resolve, reject) => {
		setTimeout(ID => {
			const recipe = {
				title: 'Pasta',
				publisher: 'John'
			};
			resolve(`${ID} ${recipe.title}`);
		}, 1500, recID);
	});
};

const getRelated = publisher => {
	return new Promise((resolve, reject) => {
		setTimeout(pub => {
			const recipe = {
				title: 'Pizza',
				publisher: 'John'
			}
			resolve(`${recipe.title}, ${pub}`);
		}, 1500, publisher);
	});
};

//then - using when the promise is fullfiled for getting the result from resolving funciton
getIDs
	.then(IDs => {
		console.log(IDs);
		return getRecipe(IDs[2]);
	})
	//handle the result of the 2 promise
	.then(recipe => {
		console.log(recipe);
		return getRelated('Jonas');
	})
	.then(recipe => {
		console.log(recipe);
	})
	.catch(error => {
		console.log(error);
	});
