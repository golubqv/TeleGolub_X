class GiftsPage {

    open() {

        let html = `<div class="gift-grid">`;

        giftService.getAll().

        giftService.getAll().forEach(gift => {

    html += `

    <div class="gift-card">

        <div class="gift-emoji">

            ${gift.emoji}

        </div>

        <h3>${gift.name}</h3>

        <p>${gift.rarity}</p>

        <div class="gift-price">

            ⭐ ${gift.price}

        </div>

        <button class="sendGift"

                data-id="${gift.id}">

            🎁 Отправить

        </button>

    </div>

    `;

});

html += "</div>";

document.querySelector(".messages").innerHTML = html;

this.events();

}

events() {

    document.querySelectorAll(".sendGift").forEach(button => {

        button.onclick = () => {

            const id = Number(button.dataset.id);

            const gift = giftService.getAll().find(g => g.id === id);

            if (!gift) return;

            alert(

                `🎁 Подарок "${gift.name}" отправлен!`

            );

        };

    });

}

}

const giftsPage = new GiftsPage();  
