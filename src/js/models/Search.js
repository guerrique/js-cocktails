import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.query}`);
      this.result = res.data.drinks;
      console.log(this.result);
    } catch(error) {
      console.log(error);
      alert('something went wrong');
    }
  }
}
