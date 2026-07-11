class AchievementsPage {

    open() {

        let html = `

<div class="achievements">

<h1>🏆 Достижения</h1>

<div class="achievement-grid">

`;

        achievementService.getAll().forEach(item => {

            html += `

<div class="achievement-card ${item.unlocked ? "unlocked" : "locked"}">

<div class="achievement-icon">

${item.icon}

</div>

<h3>${item.title}</h3>

<p>${item.description}</p>

<div class="achievement-status">

${item.unlocked ? "✅ Получено" : "🔒 Заблокировано"}

</div>

</div>

`;

        });

        html += `

</div>

</div>

`;

        document.querySelector(".messages").innerHTML =

                  html += `
        </div>
        </div>
        `;

        document.querySelector(".messages").innerHTML = html;

    }

}

const achievementsPage = new AchievementsPage();
