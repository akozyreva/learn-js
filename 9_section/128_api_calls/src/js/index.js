// APIKey = 15d08ce5f45a57ebabb75e518a197da1
//http://food2fork.com/api/search
//for npm packages we need to export in this way
import axios from 'axios';

async function getResults(query) {
  const key = '15d08ce5f45a57ebabb75e518a197da1';
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  try {
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch(error) {
      alert(error);
  }
}

getResults('pizza');
