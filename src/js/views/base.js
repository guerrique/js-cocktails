export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  resultsList: document.querySelector('.results__list'),
  recipe: document.querySelector('.recipe'),
  shoppingList: document.querySelector('.shopping__list')
};

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {

    const loader = `
        <div class="${elementStrings.loader}">
          <svg>
            <use href="img/icons.svg#icon-cw"></use>
          </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};
