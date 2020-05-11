// Global app controller
// import axios from 'axios';

import Search from './models/Search';
import * as searchView from './views/searchView';
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

    try {

    await state.search.getResults();
    } catch(error) {
      alert(error);
    }
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
