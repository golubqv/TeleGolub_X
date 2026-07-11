document.getElementById("register").onclick = () => {

    const username = document.getElementById("username")

  const username = document.getElementById("username").value.trim();

const login = document.getElementById("login").value.trim();

const password = document.getElementById("password").value;

if(username==="" || login==="" || password===""){

    alert("Заполните все поля.");

    return;

}

try{

    auth.register(

        username,

        login,

        password

    );

    alert("Аккаунт успешно создан!");

    window.location.href="login.html";

}catch(error){

    alert(error.message);

}
