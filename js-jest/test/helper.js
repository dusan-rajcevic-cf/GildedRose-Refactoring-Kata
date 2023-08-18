const itemUpdater = require('../src/updater_factory');
const Item = require('../src/Item');

module.exports = function addAndUpdateItem(name, sellIn, quality) {
  const item = new Item(name, sellIn, quality);
  itemUpdater(item).update();
  return item;
}