const Updater = require('./Updater');

class AgedBrie extends Updater {
  update() {
    const factor = this.item.sellIn > 0 ? 1 : 2;
    this.item.quality = Math.min(this.item.quality + factor, this.max)
    this.item.sellIn -= 1;
  }
}

module.exports = AgedBrie;
