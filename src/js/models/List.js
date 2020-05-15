import uniqid from 'uniqid';

export default class List {
  constructor() {
    this.items = [];
  }

  addItem(unit, ingredient) {
    const item = {
      id: uniqid(),
      unit,
      ingredient
    }
    this.items.push(item);
    return item;
  }
};
