class NotificationCenter {

    constructor(){

        this.notifications = [];

    }

    add(title,text){

        this.notifications.unshift({

            title,

            text,

            time:new Date().toLocaleTimeString()

        });

        this.render();

    }

    render(){

        const list = document.getElementById("notifyList");

        if(!list) return;

        list.innerHTML="";

        this.notifications.forEach(item=>{

            list.innerHTML += `

            <div class="notify-item">

                <div class="notify-title">

                    ${item.title}

                </div>

                <div class="notify-text">

                    ${item.text}

                </div>

                <div class="notify-time">

                    ${item.time}

                </div>

            </div>

            `;

        });

    }

}

const notify = new NotificationCenter();

const windowNotify = document.getElementById("notifyWindow");

document.getElementById("notificationsBtn").onclick=()=>{

windowNotify.style.display=

windowNotify.style.display==="block"

?

"none"

:

"block";

};

notify.add(

"Добро пожаловать",

"Спасибо за использование TeleGolub."

);

notify.add(

"TeleGolub",

"Не забудьте попробовать TeleGolub Pro."

);
