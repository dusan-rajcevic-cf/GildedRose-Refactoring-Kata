const Item = require('../src/Item');
const addAndUpdateItem = require("./helper");
const ITEM = 'Elixir of the Mongoose';

describe('🧺 Item', function () {
  it('should decrease in quality by 1 before sell in day', function () {
    for (let day = 11; day > 0; day--) {
      const sellIn = day;
      const quality = 1;
      const item = addAndUpdateItem(ITEM, sellIn, quality);
      expect(item).toEqual(new Item(ITEM, sellIn - 1, quality - 1));
    }
  });

  it('should decrease in quality by 2 after sell in day', function () {
    const sellIn = -1;
    const quality = 5;
    const item = addAndUpdateItem(ITEM, sellIn, quality);
    expect(item).toEqual(new Item(ITEM, sellIn - 1, quality - 2));
  });

  it('should not decrease in quality bellow 0', function () {
    for (let day = 1; day > -1; day--) {
      const sellIn = day;
      const quality = 0;
      const item = addAndUpdateItem(ITEM, sellIn, quality);
      expect(item).toEqual(new Item(ITEM, sellIn - 1, 0));
    }
  });
});
