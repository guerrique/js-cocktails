import { elements } from './base';

export const displayListItem = item => {

  const markup = `
      <li class="shopping__item">
          <p class="shopping__description">${item.ingredient}</p>
          <button class="shopping__delete btn-tiny">
              <svg>
                  <use href="img/icons.svg#icon-circle-with-cross"></use>
              </svg>
          </button>
      </li>
  `;

  elements.shoppingList.insertAdjacentHTML('beforeend', markup);
}
