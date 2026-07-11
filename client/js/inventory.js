class Inventory {

    constructor() {

        this.items = db.load("tg_inventory", []);

    }

    add(gift) {

        this.items.push({

            id: crypto.randomUUID(),

            giftId: gift.id,

            emoji: gift.emoji,

            name: gift.name,

            rarity: gift.rarity,

            received: Date.now()

        });

        db.save("tg_inventory", this.items);

    }

    getAll() {

        return this.items;

    }

}

const inventory = new Inventory();
