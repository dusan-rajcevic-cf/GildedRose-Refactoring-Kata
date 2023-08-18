const {Shop} = require('../src/gilded_rose');
const {Item} = require('../src/Item');
const ITEM = 'Elixir of the Mongoose';

describe('Item', function () {
  it('should decrease in quality by 1 before sell in day', function () {
    for (let day = 11; day > 0; day--) {
      const sellIn = day;
      const quality = 1;
      const gildedRose = new Shop([new Item(ITEM, sellIn, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item(ITEM, sellIn - 1, quality - 1));
    }
  });

  it('should decrease in quality by 2 after sell in day', function () {
    const sellIn = 0;
    const quality = 5;
    const gildedRose = new Shop([new Item(ITEM, sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0]).toEqual(new Item(ITEM, sellIn - 1, quality - 2));
  });

  it('should not decrease in quality bellow 0', function () {
    for (let day = 1; day > -1; day--) {
      const sellIn = day;
      const quality = 0;
      const gildedRose = new Shop([new Item(ITEM, sellIn, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item(ITEM, sellIn - 1, 0));
    }
  });
});
