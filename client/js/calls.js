class CallUI {

    constructor() {

        this.active = false;
        this.seconds = 0;
        this.timer = null;

    }

    open(type = "audio") {

        document.querySelector(".messages").innerHTML = `

<div class="call-screen">

    <div class="call-avatar">

        👤

    </div>

    <h1>Алексей</h1>

    <p id="callStatus">

        ${type === "video" ? "📹 Видеозвонок" : "📞 Аудиозвонок"}

    </p>

    <div id="callTime">

        00:00

    </div>

    <div class="call-buttons">

        <button id="muteBtn">🎤</button>

        <button id="cameraBtn">📹</button>

        <button id="speakerBtn">🔊</button>

        <button id="endBtn">❌</button>

    </div>

</div>

`;

        this.seconds = 0;

        clearInterval(this.timer);

        this.timer = setInterval(() => {

            this.seconds++;

            const min = String(Math.floor(this.seconds / 60)).padStart(2, "0");
            const sec = String(this.seconds % 60).padStart(2, "0");

            document.getElementById("callTime").textContent = `${min}:${sec}`;

        }, 1000);

        document.getElementById("endBtn").onclick = () => {

            clearInterval(this.timer);

            document.querySelector(".messages").innerHTML = `
                <div class="message ai">
                    📞 Звонок завершён.
                </div>
            `;

        };

    }

}

const calls = new CallUI();
