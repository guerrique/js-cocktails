import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const displayResults = (resultsArray) => {
  resultsArray.forEach(result => {
      const markup = `
        <li>
          <a class="results__link" href="#${result.idDrink}" data-resultid=${result.idDrink}>
              <figure class="results__fig">
                  <img src="${result.strDrinkThumb}" alt="${result.strDrink}">
              </figure>
              <div class="results__data">
                  <h4 class="results__name">${result.strDrink}</h4>
                  <p class="results__author">${result.strIBA ? result.strIBA : result.strCategory}</p>
              </div>
          </a>
      </li>
      `;
    elements.resultsList.insertAdjacentHTML('beforeend', markup);
  })
};

export const clearResults = () => {
  elements.resultsList.innerHTML = '';
}
