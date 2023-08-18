const Updater = require('./Updater');

class NormalItem extends Updater {
  quality() {
    return this.item.sellIn > 0 ? super.quality() : -2;
  }
}

module.exports = NormalItem;
