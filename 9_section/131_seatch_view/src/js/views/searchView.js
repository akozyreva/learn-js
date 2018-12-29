import {
	elements
} from './base';

export const getInput = () => elements.searchInput.value;

export const clearResults = () => {
	elements.searchResultList.innerHTML = '';
};


//it's private function
const renderRecipe = recipe => {
	const markup = `
				<li>
                    <a class="results__link" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
				`;
	//insert html in the Dom from 1 to 2, from 2 to 3...
	elements.searchResultList.insertAdjacentHTML('beforeend',markup);
};

//function for clearing input field after pushing enter
export const clearInput = () => elements.searchInput.value = '';


export const renderResults = recipes => {
	//loop for the result and call function renderRecipe for each recipe
	recipes.forEach(renderRecipe);
};
