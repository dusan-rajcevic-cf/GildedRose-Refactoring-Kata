const itemUpdater = require('./item_updater');

class GildedRose {
  constructor(items) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => itemUpdater(item).update())
    return this.items;
  }
}

module.exports = GildedRose;
