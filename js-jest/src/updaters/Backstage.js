const Updater = require('./Updater');

class Backstage extends Updater {
  update() {
    this.item.quality = Math.min(this.item.quality + this.factor(), this.max);
    this.item.sellIn -= 1;
  }

  factor() {
    let factor = 1;
    switch (true) {
      case this.item.sellIn > 10:
        break;
      case this.item.sellIn > 5:
        factor = 2;
        break;
      case this.item.sellIn > 0:
        factor = 3;
        break;
      default:
        factor = -this.item.quality;
    }
    return factor;
  }
}

module.exports = Backstage;