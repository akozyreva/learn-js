// APIKey = 15d08ce5f45a57ebabb75e518a197da1
//http://food2fork.com/api/search

import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import Recipe from './models/Recipe';
import List from './models/List';
import {
	elements,
	renderLoader,
	clearLoader
} from './views/base';

/*Global state of the app
-Search object
- Current recipe
- Shopping list
- Like recipe
*/
const state = {}


/*SEARCH CONTROLLER*/
const controlSearch = async () => {
	// 1) get he query from the view
	const query = searchView.getInput();
	//console.log(query);

	if (query) {
		// 2) New search object and add to state
		// we add to global const state!
		state.search = new Search(query);

		//3) Prepare UI for the results
		//clean the input and prev results
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);

		try {
			//4) Seatch for the recipeis
			await state.search.getResults();

			//5) render results on UI
			//console.log(state.search.result);
			clearLoader();
			searchView.renderResults(state.search.result);
		} catch (err) {
			console.log(err);
			clearLoader();
		}

	}
}

elements.searchForm.addEventListener('submit', event => {
	//it's for not reloading the page after push the btn
	event.preventDefault();
	controlSearch();
});

elements.searchResPages.addEventListener('click', event => {
	console.log(event.target);
	//closest method js - in this way we click only click on the btn, not icon or somth else
	const btn = event.target.closest('.btn-inline');
	if (btn) {
		//retrieve the value of property goto
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
		console.log(goToPage);
	}
});


/*RECIPE CONTROLLER*/

const controlRecipe = async () => {
	//we need to take hash, getting from event listener and delte #
	const id = window.location.hash.replace('#', '');
	console.log(id);

	if (id) {
		// Prepare UI for changes
		recipeView.clearRecipe();
		renderLoader(elements.recipe);

		//highlight select search item
		if (state.search) searchView.highLightSelected(id);


		//Create new recipe obj
		state.recipe = new Recipe(id);

		/*//IMPORTANT! FOR TESTING WE HAVE ACCESS TO THE STATE RECIPE OBJ AND IT WORKS!!!!
		window.r = state.recipe;
		//for cathing an error
		*/
		try {
			//Get recipe data
			await state.recipe.getRecipe();
			state.recipe.parseIgredients();

			//Calculate servingd and time
			state.recipe.calcTime();
			state.recipe.calcServings();

			//Render the recipe
			//console.log(state.recipe);
			clearLoader();
			recipeView.renderRecipe(state.recipe);
		} catch (err) {
			console.log(err);
		}

	}
};



/*window.addEventListener('hashchange', controlRecipe);
//if user reloads page, we need to show recipe at all 
window.addEventListener('load', controlRecipe);
*/

//another way to write it
['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipe));

// HANDLING RECIPE BTN CLICK
elements.recipe.addEventListener('click', e => {
	//mathces find all matches, that we need
	// * means all children
	if (e.target.matches('.btn-decrease, .btn-decrease *')) {
		// decrease btn is clicked
		if (state.recipe.servings > 1) {
			state.recipe.updateServings('dec');
		}

	} else if (e.target.matches('.btn-increase, .btn-increase *')) {
		// increase btn is clicked
		state.recipe.updateServings('inc');
	}
	recipeView.updateServingIngredients(state.recipe);
});

const l = new List();
window.l = l;