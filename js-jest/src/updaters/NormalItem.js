const Updater = require('./Updater');

class NormalItem extends Updater {
  quality() {
    return this.item.sellIn > 0 ? -1 : -2
  }
}

module.exports = NormalItem;