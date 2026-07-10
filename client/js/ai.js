class TeleGolubAI {

    constructor(){

        this.pro = false;

    }

    open(){

        const messages = document.querySelector(".messages");

        if(!this.pro){

            messages.innerHTML = `

            <div class="ai-lock">

                <div class="ai-logo">🤖</div>

                <h1>TeleGolub AI</h1>

                <p>

                TeleGolub AI входит только в подписку
                <b>TeleGolub Pro</b>

                </p>

                <button id="buyPro">

                    Получить Pro

                </button>

            </div>

            `;

            document.getElementById("buyPro").onclick=()=>{

                alert("Экран покупки появится позже.");

            }

            return;

        }

        messages.innerHTML=`

        <div class="ai-chat">

            <div class="ai-message">

                Привет! Чем могу помочь?

            </div>

        </div>

        <div class="ai-input">

            <input
            id="aiText"
            placeholder="Спросить TeleGolub AI">

            <button id="sendAI">

                ➜

            </button>

        </div>

        `;

        document
        .getElementById("sendAI")
        .onclick=()=>{

            const text=document
            .getElementById("aiText")
            .value;

            if(text==="") return;

            document
            .querySelector(".ai-chat")
            .innerHTML+=`

            <div class="my-ai">

                ${text}

            </div>

            <div class="ai-message">

                Здесь позже будет настоящий ответ AI.

            </div>

            `;

            document
            .getElementById("aiText")
            .value="";

        };

    }

}

const teleGolubAI=new TeleGolubAI();
