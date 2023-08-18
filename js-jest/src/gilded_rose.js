const {Item, AGED_BRIE, BACKSTAGE_PASSES, SULFURAS, CONJURED} = require('./item.js');

const MIN = 0;
const MAX = 50;

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let item of this.items) {
      this.update(item);
    }

    return this.items;
  }

  normalItem(item) {
    let factor = -1;
    if (item.sellIn <= 0) {
      factor = -2;
    }
    item.quality = Math.max(item.quality + factor, MIN)
  }

  conjuredItem(item) {
    let factor = -2;
    if (item.sellIn <= 0) {
      factor = -4;
    }
    item.quality = Math.max(item.quality + factor, MIN)
  }

  agedBrieItem(item) {
    let factor = 1;
    if (item.sellIn <= 0) {
      factor = 2;
    }
    item.quality = Math.min(item.quality + factor, MAX)
  }

  backStage(item) {
    let factor = 1;
    switch (true) {
      case item.sellIn > 10:
        break;
      case item.sellIn > 5:
        factor = 2;
        break;
      case item.sellIn > 0:
        factor = 3;
        break;
      default:
        factor = -item.quality;
    }
    item.quality = Math.min(item.quality + factor, MAX);
  }

  update(item) {
    switch (item.name) {
      case AGED_BRIE:
        this.agedBrieItem(item);
        break;
      case BACKSTAGE_PASSES:
        this.backStage(item);
        break;
      case SULFURAS:
        return;
      case CONJURED:
        this.conjuredItem(item);
        break;
      default:
        this.normalItem(item);
    }

    item.sellIn -= 1;
  }
  isAgedBrie(item) {
    return item.name === AGED_BRIE;
  }
  isBackstage(item) {
    return item.name === BACKSTAGE_PASSES
  }
  isSulfuras(item) {
    return item.name === SULFURAS;
  }
  isConjured(item) {
    return item.name === CONJURED;
  }
}

module.exports = {
  Shop
}
