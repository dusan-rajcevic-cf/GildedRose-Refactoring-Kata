const itemUpdater = require('../src/item_updater');
const Item = require('../src/Item');
const NormalItem = require('../src/updaters/NormalItem');
const AgedBrie = require('../src/updaters/AgedBrie');
const Backstage = require('../src/updaters/Backstage');
const Sulfuras = require('../src/updaters/Sulfuras');
const Conjured = require('../src/updaters/Conjured');

describe('Item updater', function () {
  it('should return an updater for Aged Brie', function () {
    const item = new Item('Aged Brie', 1, 1);
    const updater = itemUpdater(item);
    expect(updater).toBeInstanceOf(AgedBrie);
  });
  it('should return an updater for Backstage', function () {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 1);
    const updater = itemUpdater(item);
    expect(updater).toBeInstanceOf(Backstage);
  });
  it('should return an updater for Sulfuras', function () {
    const item = new Item('Sulfuras, Hand of Ragnaros', 1, 1);
    const updater = itemUpdater(item);
    expect(updater).toBeInstanceOf(Sulfuras);
  });
  it('should return an updater for Conjured', function () {
    const item = new Item('Conjured Mana Cake', 1, 1);
    const updater = itemUpdater(item);
    expect(updater).toBeInstanceOf(Conjured);
  });
  it('should return a NormalItem updater for any other item', function () {
    const item = new Item('Normal Random Item', 1, 1);
    const updater = itemUpdater(item);
    expect(updater).toBeInstanceOf(NormalItem);
  });
});