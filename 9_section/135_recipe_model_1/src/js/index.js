// APIKey = 15d08ce5f45a57ebabb75e518a197da1
//http://food2fork.com/api/search

import Search from './models/Search';
import * as searchView from './views/searchView';
import Recipe from './models/Recipe';
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

		//4) Seatch for the recipeis
		await state.search.getResults();

		//5) render results on UI
		//console.log(state.search.result);
		clearLoader();
		searchView.renderResults(state.search.result);
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
	if(btn) {
		//retrieve the value of property goto
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
		console.log(goToPage);
	}
});


/*RECIPE CONTROLLER*/

const r = new Recipe(46956);
r.getRecipe();

console.log(r);