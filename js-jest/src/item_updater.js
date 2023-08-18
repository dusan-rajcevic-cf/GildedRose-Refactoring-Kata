const NormalItem = require('./updaters/NormalItem');
const AgedBrie = require('./updaters/AgedBrie');
const Backstage = require('./updaters/Backstage');
const Sulfuras = require('./updaters/Sulfuras');
const Conjured = require('./updaters/Conjured');

const map = {
  'Aged Brie': AgedBrie,
  'Backstage passes to a TAFKAL80ETC concert': Backstage,
  'Sulfuras, Hand of Ragnaros': Sulfuras,
  'Conjured Mana Cake': Conjured
}
module.exports = (item) => map[item.name] !== undefined ? new map[item.name](item) : new NormalItem(item);
