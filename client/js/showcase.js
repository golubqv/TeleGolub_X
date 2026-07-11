class Showcase {

    open() {

        const items = inventory.getAll();

        let html = `

<div class="showcase">

<h1>🏆 Витрина подарков</h1>

<p>

Ваши самые редкие подарки

</p>

<div class="showcase-grid">

`;

        const sorted = [...items].sort((a, b) => {

            const order = {
                Mythic: 5,
                Legendary: 4,
                Epic: 3,
                Rare: 2,
                Common: 1
            };

            return (order[b.rarity] || 0) - (order[a.rarity] || 0);

        });

        sorted.slice(0, 12).forEach(item => {

            html += `

<div class="showcase-card">

<div class="showcase-emoji">

${item.emoji}

</div>

<h3>${item.name}</h3>

<div class="rarity"

style="background:${item.rarityColor}">

${item.rarity}

</div>

<p>⭐ Уровень

⭐ Уровень ${item.level}</p>

<small>${item.serial}</small>

</div>

`;

        });

        html += `

</div>

</div>

`;

        document.querySelector(".messages").innerHTML = html;

    }

}

const showcase = new Showcase();
