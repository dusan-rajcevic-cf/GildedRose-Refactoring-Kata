const {Shop, Item} = require("../src/gilded_rose");
const BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";

describe("Backstage passes", function() {
  it("should increase in quality by 1 if sell in day is greater than 10 days", function() {
    const sellIn = 11;
    const quality = 1;
    const gildedRose = new Shop([new Item(BACKSTAGE, sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0]).toEqual(new Item(BACKSTAGE, sellIn - 1, quality + 1));
  });

  it("should increase in quality by 2 if sell in day is between 6 and 10 days", function() {
    for (let day = 10; day > 5; day--) {
      const sellIn = day;
      const quality = 1;
      const gildedRose = new Shop([new Item(BACKSTAGE, sellIn, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item(BACKSTAGE, sellIn - 1, quality + 2));
    }
  });

  it("should increase in quality by 3 if sell in day is between 1 and 5 days", function() {
    for (let day = 5; day > 0; day--) {
      const sellIn = day;
      const quality = 1;
      const gildedRose = new Shop([new Item(BACKSTAGE, sellIn, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item(BACKSTAGE, sellIn - 1, quality + 3))
    }
  });

  it("should set quality to 0 after concert", function() {
    const sellIn = 0;
    const quality = 1;
    const gildedRose = new Shop([new Item(BACKSTAGE, sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0]).toEqual(new Item(BACKSTAGE, sellIn - 1, 0))
  });

  it("should not go in quality over 50", function() {
    for (let day = 11; day > -1; day--) {
      const sellIn = 11;
      const quality50 = 50;
      const gildedRose = new Shop([new Item(BACKSTAGE, sellIn, quality50)]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item(BACKSTAGE, sellIn - 1, quality50));
    }
  });
});
