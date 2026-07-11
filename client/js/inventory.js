class Inventory {

    constructor() {

        t

});

        });

    add(gift) {

    const rarity = giftGenerator.randomRarity();

    this.items.push({

        id: crypto.randomUUID(),

        serial: "#" + Math.floor(Math.random()*1000000),

        emoji: gift.emoji,

        name: gift.name,

        rarity: rarity.name,

        rarityColor: rarity.color,

        level: Math.floor(Math.random()*100)+1,

        received: new Date().toLocale

    const rarity = giftGenerator.randomRarity();

    }

    getAll() {

        return this.items;

    }

}

const inventory = new Inventory();
