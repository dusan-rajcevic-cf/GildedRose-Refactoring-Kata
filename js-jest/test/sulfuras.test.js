const {Shop, Item} = require("../src/gilded_rose");
const SULFURAS = "Sulfuras, Hand of Ragnaros";

describe("Sulfuras - legendary item", function() {
  it("should never change", function() {
    for (let day = 11; day > -2; day--) {
      const sellIn = day;
      const quality = 10;
      const gildedRose = new Shop([new Item(SULFURAS, sellIn, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item(SULFURAS, sellIn, quality));
    }
  });
});
