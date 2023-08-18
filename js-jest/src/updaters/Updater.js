class Updater {

  constructor(item) {
    this.item = item;
    this.max = Math.max(50, this.item.quality);
    this.min = 0;
  }

  update() {
    this.adjustQuality();
    this.adjustSellIn();
  }

  adjustQuality() {
    this.item.quality += this.quality();
    this.item.quality = Math.min(this.item.quality, this.max);
    this.item.quality = Math.max(this.item.quality, this.min);
  }

  adjustSellIn() {
    this.item.sellIn += this.sellIn();
  }

  quality() {
    return -1;
  }

  sellIn() {
    return -1;
  }
}

module.exports = Updater;