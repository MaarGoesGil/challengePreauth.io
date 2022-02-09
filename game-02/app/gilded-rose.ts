export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            // Sulfuras never has to be sold or decreases in Quality
            if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1
                // 'Backstage passes' increases in Quality as its SellIn value approaches;
                if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                    // Quality increases by 2 when there are 10 days or less
                    if (this.items[i].sellIn < 11 ) {
                        this.items[i].quality > 48 ?
                        this.items[i].quality = 50 :
                        this.items[i].quality = this.items[i].quality + 2
                    }
                    // Quality increases by 3 when there are 5 days or less
                    if (this.items[i].sellIn < 6 ) {
                        this.items[i].quality > 47 ?
                        this.items[i].quality = 50 :
                        this.items[i].quality = this.items[i].quality + 1
                    }
                    //  Quality drops to 0 after the concert
                    if (this.items[i].sellIn < 1) {
                        this.items[i].quality = 0;
                    }
                }
                // Aged Brie increases in Quality the older it gets
                if (this.items[i].name === 'Aged Brie') {                    
                    this.items[i].quality < 50 ?
                    this.items[i].quality = this.items[i].quality + 1 :
                    this.items[i].quality = 50             
                }
                else {
                    // Once the sell by date has passed, Quality degrades twice as fast and never drops below 0
                    if(this.items[i].sellIn < 1) {
                        this.items[i].quality > 1 ?
                        this.items[i].quality = this.items[i].quality - 1 :
                        this.items[i].quality = 0
                    }
                    if (this.items[i].name != 'Conjured') {
                        // 'Normal' items degrade in Quality in 1
                        this.items[i].quality > 0 ?
                        this.items[i].quality = this.items[i].quality - 1 :
                        this.items[i].quality = 0
                    }
                    else {
                        // 'Conjured' items degrade in Quality twice as fast as normal items
                        this.items[i].quality > 0 ?
                        this.items[i].quality = this.items[i].quality - 2 :
                        this.items[i].quality = 0
                    }                
                } 
            }
        }
        return this.items;
    }
}