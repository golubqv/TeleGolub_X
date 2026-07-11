class GiftGenerator {

    constructor() {

        this.rarities = [

            {
                name: "Common",
                chance: 60,
                color: "#9e9e9e"
            },

            {
                name: "Rare",
                chance: 25,
                color: "#2196f3"
            },

            {
                name: "Epic",
                chance: 10,
                color: "#9c27b0"
            },

            {
                name: "Legendary",
                chance: 4,
                color: "#ff9800"
            },

            {
                name: "Mythic",
                chance: 1,
                color: "#ff1744"
            }

        ];

    }

    randomRarity() {

        const value = Math.random() * 100;

        let sum = 0;

        for (const rarity of this.rarities) {

            sum += rarity.chance;

            if (value <= sum) {

                return rarity;

            }

        }

        return this.rarities[0];

    }

}

const giftGenerator = new GiftGenerator();
