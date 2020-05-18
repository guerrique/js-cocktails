// Global app controller
// import axios from 'axios';

import Search from './models/Search';
import Cocktail from './models/Cocktail';
import List from './models/List';
import * as searchView from './views/searchView';
import * as cocktailView from './views/cocktailView';
import * as listView from './views/listView';
import { elements } from './views/base';

const state = {};

// TEST
window.state = state;

const controlSearch = async() => {

  // get query from user
  const query = searchView.getInput();


  if (query) {
    // create new search object and add to state
    state.search = new Search(query);

    // prepare the UI
    searchView.clearInput();
    searchView.clearResults();

    // get results
    try {

    await state.search.getResults();
    } catch(error) {
      alert(error);
    }

    // display results on the UI
    searchView.displayResults(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

const controlCocktail = async () => {
  // get the ID from the url
  const id = window.location.hash.replace('#', '');
  console.log(id);

  // prepare the UI
  cocktailView.clearCocktail();

  // get the recipe from API
  if (id) {
    state.cocktail = new Cocktail(id);

    try {
      await state.cocktail.getRecipe();
      state.cocktail.parseIngredients();

      // display recipe on UI
      cocktailView.displayCocktail(state.cocktail);

    } catch(error) {
      console.log(error);
    }
  }
};

['load', 'hashchange'].forEach(e => window.addEventListener(e, controlCocktail));

const controlList = () => {
  // create a new list if there isn't one
  if (!state.list) state.list = new List();

  // add items to the list
  state.cocktail.ingredients.forEach(ing => {

    state.list.addItem(ing.ingredient);
  });

  // display list on the UI
  state.list.items.forEach(item => {
    listView.displayListItem(item);
  })
};

elements.recipe.addEventListener('click', e => {
  if (e.target.matches('.recipe__btn-add, .recipe__btn-add *')) {
    console.log(e);
    controlList();
  }
})
