import axios from 'axios';

export default class Cocktail {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {

      const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`)
      console.log(res);
      const result = res.data.drinks[0];
      console.log(result);
      this.title = result.strDrink;
      this.image = result.strDrinkThumb;
      // this.ingredients = ;
      // this.measures = ;
      this.description = result.strInstructions;

    } catch(error) {
      console.log(error);
    }
  }
}
