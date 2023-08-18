const {Shop, Item} = require("../src/gilded_rose");
const AGED_BRIE = "Aged Brie";
describe("Aged Brie", function() {
  it("should increase in quality by 1 before sell in day", function() {
    for (let day = 11; day > 0; day--) {
      const sellIn = day;
      const quality = 1;
      const gildedRose = new Shop([new Item(AGED_BRIE, sellIn, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item(AGED_BRIE, sellIn - 1, quality + 1));
    }
  });

  it("should increase in quality by 2 after sell in day", function() {
    const sellIn = 0;
    const quality = 1;
    const gildedRose = new Shop([new Item(AGED_BRIE, sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0]).toEqual(new Item(AGED_BRIE, sellIn - 1, quality + 2));
  });

  it("should not go over 50", function() {
    for (let day = 1; day > -1; day--) {
      const sellIn = day;
      const quality50 = 50;
      const gildedRose = new Shop([new Item(AGED_BRIE, sellIn, quality50)]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item(AGED_BRIE, sellIn - 1, quality50));
    }
  });
});
