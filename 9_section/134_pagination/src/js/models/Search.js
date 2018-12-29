import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }
  //asynchronous method
  async getResults() {
    const key = '15d08ce5f45a57ebabb75e518a197da1';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      //console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
