const Updater = require('./Updater');

class Backstage extends Updater {
  quality() {
    if (this.item.sellIn > 10) {
      return 1;
    }
    if (this.item.sellIn > 5) {
      return 2;
    }
    if (this.item.sellIn > 0) {
      return 3;
    }
    return -this.item.quality;
  }
}

module.exports = Backstage;
