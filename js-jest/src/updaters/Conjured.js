const Updater = require('./Updater');

class Conjured extends Updater {
  quality() {
    return this.item.sellIn > 0 ? -2 : -4;
  }
}

module.exports = Conjured;
