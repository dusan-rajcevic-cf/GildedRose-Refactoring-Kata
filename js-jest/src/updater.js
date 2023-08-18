const AGED_BRIE = "Aged Brie";
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";
const CONJURED = "Conjured Mana Cake";
const MIN = 0;
const MAX = 50;

class Updater {
    setItem(item) {
        this.item = item;
        return this;
    }
    normalFactor() {
        let factor = -1;
        if (this.item.sellIn <= 0) {
            factor = -2;
        }
        return factor;
    }

    backStage() {
        let factor = 1;
        switch (true) {
            case this.item.sellIn > 10:
                break;
            case this.item.sellIn > 5:
                factor = 2;
                break;
            case this.item.sellIn > 0:
                factor = 3;
                break;
            default:
                factor = - this.item.quality;
        }
        return factor;
    }

    update() {
        switch (this.item.name) {
            case AGED_BRIE:
                this.item.quality = Math.min(this.item.quality + (-1 * this.normalFactor()), MAX)
                break;
            case BACKSTAGE_PASSES:
                this.item.quality = Math.min(this.item.quality + this.backStage(), MAX);
                break;
            case SULFURAS:
                return;
            case CONJURED:
                this.item.quality = Math.max(this.item.quality + (2 * this.normalFactor()), MIN)
                break;
            default:
                this.item.quality = Math.max(this.item.quality + this.normalFactor(), MIN);
        }

        this.item.sellIn -= 1;
    }
}

module.exports = {
    Updater
}