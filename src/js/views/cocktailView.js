import { elements } from './base';

const createIngredient = (el) => {
  const markup = `
    <li class="recipe__item">
        <svg class="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__count">${el.unit}</div>
        <div class="recipe__ingredient">
            <span class="recipe__unit"></span>
            ${el.ingredient}
        </div>
    </li>
  `;
  return markup;
}

export const displayCocktail = (cocktail) => {
  const markup = `
      <figure class="recipe__fig">
          <img src="${cocktail.image}" alt="${cocktail.title}" class="recipe__img">
          <h1 class="recipe__title">
              <span>${cocktail.title}</span>
          <div>
              <button class="recipe__love">
                  <svg class="header__likes">
                      <use href="img/icons.svg#icon-heart-outlined"></use>
                  </svg>
              </button>
          </div>
          </h1>
      </figure>
      <div class="recipe__ingredients">
            <ul class="recipe__ingredient-list">
            ${cocktail.ingredients.map(el => createIngredient(el)).join('')}
            </ul>

          <button class="btn-small recipe__btn recipe__btn-add">
              <svg class="search__icon">
                  <use href="img/icons.svg#icon-shopping-cart"></use>
              </svg>
              <span>Add to shopping list</span>
          </button>
      </div>

      <div class="recipe__directions">
          <h2 class="heading-2">How to prepare it</h2>
          <p class="recipe__directions-text">
              ${cocktail.description}
          </p>
      </div>
  `;
  elements.recipe.insertAdjacentHTML('afterbegin', markup);
};

export const clearCocktail = () => {
  elements.recipe.innerHTML = '';
}



