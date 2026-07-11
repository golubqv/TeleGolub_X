class Inventory {

    constructor() {

        this.items.push({

    id: crypto.randomUUID(),

    serial: "#" + Math.floor(Math.random() * 1000000),

    giftId: gift.id,

    emoji: gift.emoji,

    name: gift.name,

    rarity: gift.rarity,

    received: new Date().toLocaleString()

});

        });

        db.save("tg_inventory", this.items);

    }

    getAll() {

        return this.items;

    }

}

const inventory = new Inventory();
