export default class Likes {
	constructor() {
		this.likes = [];
	}

	addLike(id, title, autohr, img) {
		const like = {
			id,
			title,
			author,
			img
		}
		this.likes.push(like);
		return like;
	}

	delteLike(id) {
		const index = this.likes.findIndex(el => el.id === id);
		this.items.splice(index, 1);
	}
	
	isLiked(id) {
		//test if the recipe is liked
		return this.likes.findIndex(el => el.id === id) !== -1;
	}
	
	getNumberLikes() {
		return this.likes.length;
	}
}
