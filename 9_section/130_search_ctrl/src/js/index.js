// APIKey = 15d08ce5f45a57ebabb75e518a197da1
//http://food2fork.com/api/search

import Search from './models/Search';

/*Global state of the app
-Search object
- Current recipe
- Shopping list
- Like recipe
*/
const state = {}

const controlSearch = async () => {
  // 1) get he query from the view
  const query = 'pizza' //TODO
  
  if (query) {
	  // 2) New search object and add to state
	  // we add to global const state!
	  state.search = new Search(query);
	  
	  //3) Prepare UI for the results
	  
	  //4) Seatch for the recipeis
	  await state.search.getResults();
	  
	  //5) render results on UI
	  console.log(state.search.result);
  }
}

document.querySelector('.search').addEventListener('submit', event => {
  //it's for not reloading the page after push the btn
  event.preventDefault();
  controlSearch();
});

