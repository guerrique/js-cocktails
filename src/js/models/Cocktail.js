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
      this.ingredients = [];
      this.description = result.strInstructions;

      for (let [key, value] of Object.entries(result)) {
        if (key.includes('Ingredient')) {
          if (value) {
            this.ingredients.push(value);
          }
        }
      }

      const measures = [];
      for (let [key, value] of Object.entries(result)) {
        if (key.includes('Measure')) {
          if (value) {
            measures.push(value);
          }
        }
      }

      for (let i = 0; i < this.ingredients.length; i++) {
        this.ingredients[i] += ',' + measures[i];
      }


    } catch(error) {
      console.log(error);
    }
  }
}
