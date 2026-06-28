document.getElementById("startBtn").onclick = function(){

    document.querySelector(".container").style.display = "none";

    document.getElementById("finger").style.display = "block";

};



document.getElementById("fingerBtn").onclick = function(){

    document.getElementById("finger").style.display = "none";

    document.getElementById("gallery").style.display = "block";

};



setInterval(function(){

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    document.getElementById("hearts").appendChild(heart);


    setTimeout(function(){

        heart.remove();

    },4000);


},700);
document.getElementById("storyBtn").onclick = function(){

document.getElementById("gallery").style.display="none";

document.getElementById("compliments").style.display="block";


let words = [
"Красивая ❤️",
"Добрая ✨",
"Уютная 🌙",
"Нежная",
"Особенная",
"Милая",
"Искренняя",
"Заботливая",
"Светлая",
"Прекрасная",
"Улыбчивая",
"Тёплая",
"Невероятная",
"Уникальная",
"Чудесная",
"Настоящая",
"Любимая ❤️"
];


setInterval(function(){

let w=document.createElement("div");

w.className="word";

w.innerHTML=words[Math.floor(Math.random()*words.length)];

w.style.left=Math.random()*80+"%";

document.getElementById("words").appendChild(w);


setTimeout(()=>{

w.remove();

},3000);


},500);


};
