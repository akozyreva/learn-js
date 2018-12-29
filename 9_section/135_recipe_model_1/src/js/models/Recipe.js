import axios from 'axios';
import {key, proxy } from '../config';

export default class Recipe {
	constructor(id) {
		this.id = id;
	}

	async getRecipe() {
		
		try {
			const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
			console.log(res);
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
		const periods = Math.celi (numIng / 3);
		this.time = periods * 15;
	}
	
	calcServings() {
		//simply hardcode
		this.servings = 4;
	}
}
