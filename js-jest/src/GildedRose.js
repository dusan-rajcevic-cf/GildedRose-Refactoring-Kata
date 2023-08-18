const updaterFactory = require('./updater_factory');

class GildedRose {
  constructor(items) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => updaterFactory(item).update())
    return this.items;
  }
}

module.exports = GildedRose;
