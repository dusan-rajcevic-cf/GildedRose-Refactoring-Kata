const Item = require('../src/Item');
const addAndUpdateItem = require("./helper");
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

describe('🗡️ Sulfuras - legendary item', function () {
  it('should never change', function () {
    for (let day = 11; day > -2; day--) {
      const sellIn = day;
      const quality = 10;
      const item = addAndUpdateItem(SULFURAS, day, quality);
      expect(item).toEqual(new Item(SULFURAS, sellIn, quality));
    }
  });
});
