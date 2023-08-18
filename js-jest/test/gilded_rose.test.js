const GildedRose = require('../src/GildedRose');
const Item = require('../src/Item');

describe('🏨 Gilded Rose', function () {
  it('should update quality and sellIn', function () {
    const sellIn = 10;
    const quality = 10;
    const gildedRose = new GildedRose([new Item('foo', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).not.toEqual(sellIn);
    expect(items[0].quality).not.toEqual(quality);
  });
});
