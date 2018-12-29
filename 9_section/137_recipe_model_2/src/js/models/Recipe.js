import axios from 'axios';
import {
	key,
	proxy
} from '../config';

export default class Recipe {
	constructor(id) {
		this.id = id;
	}

	async getRecipe() {

		try {
			const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
			//console.log(res);
			this.title = res.data.recipe.title;
			this.author = res.data.recipe.publisher;
			this.img = res.data.recipe.image_url;
			this.url = res.data.recipe.source_url;
			this.ingrid = res.data.recipe.ingredients;
		} catch (error) {
			console.log(error);
		}
	}

	calcTime() {
		// 15 for 3 ingridients
		const numIng = this.ingrid.length;
		const periods = Math.ceil(numIng / 3);
		this.time = periods * 15;
	}

	calcServings() {
		//simply hardcode
		this.servings = 4;
	}


	//method for parse Ingeridents, make them in correct way
	parseIgredients() {

		// if we find tablespoons, we need to change it in tbsp
		const unitsLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces', 'teaspoon', 'teaspoons', 'cups', 'pounds'];
		const unitShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];

		const newIngredients = this.ingrid.map(el => {
			//1) Uniform units
			let ingredient = el.toLowerCase();
			unitsLong.forEach((unit, i) => {
				ingredient = ingredient.replace(unit, unitShort[i]);
			});

			//2) Remove parentheses -google and past it
			ingredient = ingredient.replace(/[()]/g, " ");

			//3) Parse ingredients into count, unit and ingred themselves
			const arrIng = ingredient.split(' ');
			const unitIndex = arrIng.findIndex(el2 => unitShort.includes(el2));


			let objIng;
			if (unitIndex > -1) {
				//There is a unit
				// Ex: 4 1/2 cups, arrCount is [4, 1/2] ---> "4+1/2" eval calculate it ---> 4.5
				// Ex: 4 cups, arrCount is [4]
				let count;
				const arrCount = arrIng.slice(0, unitIndex);
				if (arrCount.length === 1) {
					count = eval(arrIng[0].replace('-', '+'));
				} else {
					count = eval(arrIng.slice(0, unitIndex).join('+'));
				}
				
				objIng = {
					count: count,
					unit: arrIng[unitIndex],
					ingredient: arrIng.slice(unitIndex + 1).join(' ')
				};

			} else if (parseInt(arrIng[0], 10)) {
				// There is no unit, but 1 el is a number
				objIng = {
					count: parseInt(arrIng[0], 10),
					unit: '',
					//we show from the first arr and return to string
					ingredient: arrIng.splice(1).join(' ')
				}


			} else if (unitIndex === -1) {
				//There is no unit and no number in 1 position
				objIng = {
					count: 1,
					unit: '',
					ingredient: ingredient
				}
			}

			return objIng;
		});
		this.ingrid = newIngredients;
	}
}
