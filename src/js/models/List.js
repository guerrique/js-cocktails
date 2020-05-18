import uniqid from 'uniqid';

export default class List {
  constructor() {
    this.items = [];
  }

  addItem(ingredient) {
    const item = {
      id: uniqid(),
      ingredient
    };

    const arrayItems = [];
    let arrItem = [];

    if (this.items.length > 0) {

      this.items.forEach(el => {
        arrItem = Object.values(el);
      arrayItems.push(arrItem);
      });

      // if the ingredient is already on the list, it is not added
       if (!arrayItems.flat().includes(item.ingredient)) {
        this.items.push(item);
       }

    } else {
      this.items.push(item);
    }


  }
};
