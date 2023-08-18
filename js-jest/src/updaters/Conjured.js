const Updater = require('./Updater');

class Conjured extends Updater {
  update() {
    const factor = this.item.sellIn > 0 ? 2 : 4;
    this.item.quality = Math.max(this.item.quality - factor, this.min);
    this.item.sellIn -= 1;
  }
}

module.exports = Conjured;