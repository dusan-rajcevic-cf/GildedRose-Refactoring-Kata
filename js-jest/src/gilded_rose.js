class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

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

  update(item) {
    if (this.isConjured(item)) {
      if (item.quality - 2 >= 0) {
        item.quality = item.quality - 2;
      } else {
        item.quality = 0;
      }
    }
    if (!this.isAgedBrie(item) && !this.isBackstage(item) && !this.isConjured(item)) {
      if (item.quality > 0) {
        if (!this.isSulfuras(item)) {
          item.quality = item.quality - 1;
        }
      }
    } else if (!this.isConjured(item)) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (this.isBackstage(item)) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (!this.isSulfuras(item)) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (this.isConjured(item)) {
        if (item.quality - 2 >= 0) {
          item.quality = item.quality - 2;
        } else {
          item.quality = 0;
        }
      } else if (!this.isAgedBrie(item)) {
        if (!this.isBackstage(item)) {
          if (item.quality > 0) {
            if (!this.isSulfuras(item)) {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }
  isAgedBrie(item) {
    return item.name === 'Aged Brie';
  }
  isBackstage(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert'
  }
  isSulfuras(item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }
  isConjured(item) {
    return item.name === 'Conjured Mana Cake';
  }
}

module.exports = {
  Item,
  Shop
}
