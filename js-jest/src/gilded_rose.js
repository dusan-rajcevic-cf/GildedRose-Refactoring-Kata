const {Updater} = require('./updater.js');
class Shop {
  constructor(items){
    this.items = items;
    this.updater = new Updater();
  }
  updateQuality() {
      return this.items.map(item => this.updater.setItem(item).update())
  }
}
module.exports = {
  Shop
}