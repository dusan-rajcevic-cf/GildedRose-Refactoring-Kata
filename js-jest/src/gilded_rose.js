const {Updater} = require('./updater.js');
class Shop {
  constructor(items){
    this.items = items;
    this.updater = new Updater();
  }
  updateQuality() {
    for (let item of this.items) {
      this.updater.setItem(item).update();
    }
    return this.items;
  }
}
module.exports = {
  Shop
}