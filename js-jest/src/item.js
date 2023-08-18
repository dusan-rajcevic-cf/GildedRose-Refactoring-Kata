class Item {
    constructor(name, sellIn, quality){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
const AGED_BRIE = "Aged Brie";
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";
const CONJURED = "Conjured Mana Cake";
module.exports = {
    Item,
    AGED_BRIE,
    BACKSTAGE_PASSES,
    SULFURAS,
    CONJURED
}