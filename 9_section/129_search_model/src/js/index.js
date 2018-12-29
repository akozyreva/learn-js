// APIKey = 15d08ce5f45a57ebabb75e518a197da1
//http://food2fork.com/api/search

import Search from './models/Search';

const search = new Search('pizza');
console.log(search);
search.getResults();
