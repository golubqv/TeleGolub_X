router.register("chat",()=>{

document.querySelector(".topbar h2").innerHTML="💬 Чаты";

});

router.register("profile",()=>{

document.getElementById("profile").click();

});

router.register("settings",()=>{

document.getElementById("settings").click();

});

router.register("pro",()=>{

document.getElementById("pro").click();

});

router.register("ai",()=>{

teleGolubAI.open();

});
