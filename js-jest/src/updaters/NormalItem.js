const Updater = require('./Updater');

class NormalItem extends Updater {
  update() {
    let factor = this.item.sellIn > 0 ? 1 : 2;
    this.item.quality = Math.max(this.item.quality - factor, this.min);
    this.item.sellIn -= 1;
  }
}

module.exports = NormalItem;