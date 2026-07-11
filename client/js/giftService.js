class GiftService {

    constructor() {

        this.gifts = db.load("tg_gifts", [

            {
                id: 1,
                emoji: "🌹",
                name: "Роза",
                price: 10,
                rarity: "Common"
            },

            {
                id: 2,
                emoji: "🧸",
                name: "Мишка",
                price: 50,
                rarity: "Rare"
            },

            {
                id: 3,
                emoji: "💎",
                name: "Кристалл",
                price: 150,
                rarity: "Epic"
            },

            {
                id: 4,
                emoji: "👑",
                name: "Корона",
                price: 500,
                rarity: "Legendary"
            }

        ]);

    }

    getAll() {

        return this.gifts;

    }

}

const giftService = new GiftService();
