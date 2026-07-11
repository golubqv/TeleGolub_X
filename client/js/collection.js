class Collection {

    open() {

        const items = inventory.getAll();

        let html = `

<div class="collection-page">

<h1>

🎁 Моя коллекция

</h1>

`;

        if(items.length===0){

            html += `

<div class="empty">

У вас пока нет подарков.

</div>

`;

        }else{

            html += `

<div class="gift-card">

    <div class="gift-emoji ${item.animated ? "animated-gift" : ""}">

        ${item.emoji}

    </div>

    <h3>${item.name}</h3>

    <span
        class="rarity"
        style="background:${item.rarityColor};">

        ${item.rarity}

    </span>

    <p>

        ⭐ Уровень ${item.level}

    </p>

    <small>

        ${item.serial}

    </small>

    <br>

    <small>

        ${item.received}

    </small>

    <br><br>

    <button

        class="favoriteGift"

        data-id="${item.id}">

        ${item.favorite ? "❤️ В избранном" : "🤍 В избранное"}

    </button>

</div>

`;
            });

            html += "</div>";

        }

        html += "</div>";

        document.querySelector(".messages").innerHTML = html;

    }

}

document.querySelectorAll(".favoriteGift").forEach(button=>{

    button.onclick=()=>{

        const item=this.items.find(

            gift=>gift.id===button.dataset.id

        );

        if(!item) return;

        item.favorite=!item.favorite;

        db.save("tg_inventory",this.items);

        this.open();

    };

});

const collection = new Collection();
