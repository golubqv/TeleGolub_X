class AchievementService {

    constructor() {

        this.achievements = db.load("tg_achievements", [

            {
                id: 1,
                icon: "🎁",
                title: "Первый подарок",
                description: "Получите свой первый подарок.",
                unlocked: false
            },

            {
                id: 2,
                icon: "🏆",
                title: "Коллекционер",
                description: "Соберите 10 подарков.",
                unlocked: false
            },

            {
                id: 3,
                icon: "💎",
                title: "Легенда",
                description: "Получите Legendary или Mythic подарок.",
                unlocked: false
            },

            {
                id: 4,
                icon: "👑",
                title: "TeleGolub Pro",
                description: "Оформите подписку Pro.",
                unlocked: false
            },

            {
                id: 5,
                icon: "🤖",
                title: "TeleGolub AI",
                description: "Используйте AI впервые.",
                unlocked: false
            }

        ]);

    }

    getAll() {

        return this.achievements;

    }

    unlock(id) {

        const achievement = this.achievements.find(a => a.id === id);

        if (!achievement || achievement.unlocked) return;

        achievement.unlocked = true;

        db.save("tg_achievements", this.achievements);

        notify.add(

            "🏆 Новое достижение",

            achievement.title

        );

    }

}

const achievementService = new AchievementService();
