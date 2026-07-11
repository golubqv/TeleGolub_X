document.getElementById("loginBtn").onclick = () => {

    const login = document.getElementById("login").value.trim();

    const password = document.getElementById("password").value;

    if(login==="" || password===""){

        alert("Заполните все поля.");

        return;

    }

    try{

        auth.login(

            login,

            password

        );

        window.location.href="chat.html";

    }catch(error){

        alert(error.message);

    }

};
