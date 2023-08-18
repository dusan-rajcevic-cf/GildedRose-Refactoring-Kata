const Item = require('../src/Item');
const addAndUpdateItem = require("./helper");
const CONJURED = 'Conjured Mana Cake';

describe('🧪 Conjured Mana Cake', function () {
  it('should decrease in quality by 2 if quality is above 1 and sell in day not passed', function () {
    for (let day = 11; day > 0; day--) {
      const sellIn = day;
      const quality = 3;
      const item = addAndUpdateItem(CONJURED, day, quality);
      expect(item).toEqual(new Item(CONJURED, sellIn - 1, quality - 2));
    }
  });

  it('should decrease in quality by 4 if quality is above 4 and sell in day passed', function () {
    const sellIn = 0;
    const quality = 5;
    const item = addAndUpdateItem(CONJURED, sellIn, quality);
    expect(item).toEqual(new Item(CONJURED, sellIn - 1, quality - 4));
  });

  it('should not decrease in quality bellow 0', function () {
    for (let day = 1; day > -1; day--) {
      const sellIn = day;
      const quality = 0;
      const item = addAndUpdateItem(CONJURED, sellIn, quality);
      expect(item).toEqual(new Item(CONJURED, sellIn - 1, 0));
    }
  });
});
