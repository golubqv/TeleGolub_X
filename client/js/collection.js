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

<div class="gift-grid">

`;

            items.forEach(item=>{

                html += `

<div class="gift-card">

<div class="gift-emoji">

${item.emoji}

</div>

<h3>

${item.name}

</h3>

<p>

${item.rarity}

</p>

</div>

`;

            });

            html += "</div>";

        }

        html += "</div>";

        document.querySelector(".messages").innerHTML = html;

    }

}

const collection = new Collection();
