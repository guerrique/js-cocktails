export default class Likes {
  constructor () {
    this.likes = [];
  }

  addLike(id, title, image) {
    const like = {id, title, image};
    this.likes.push(like);
  }

  deleteLike(id) {
    const index = this.likes.findIndex(el => el.id === id);
    this.likes.splice(id, 1);
  }

  isLiked(id) {
    return this.likes.findIndex(el => el.id === id) !== -1;
  }
};

