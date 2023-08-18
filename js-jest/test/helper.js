const itemUpdater = require('../src/item_updater');
const Item = require('../src/Item');

module.exports = function addAndUpdateItem(name, sellIn, quality) {
  const item = new Item(name, sellIn, quality);
  itemUpdater(item).update();
  return item;
}