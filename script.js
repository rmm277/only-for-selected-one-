document.getElementById("startBtn").onclick = function(){

    document.getElementById("main").style.display = "none";

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
"Любимая ❤️"

];





let showWords = setInterval(function(){


let w = document.createElement("div");


w.className="word";


w.innerHTML = words[Math.floor(Math.random()*words.length)];


w.style.left = Math.random()*80+"%";



document.getElementById("words").appendChild(w);



setTimeout(function(){

w.remove();

},3000);



},500);



};








document.getElementById("gameBtn").onclick = function(){


document.getElementById("compliments").style.display="none";


document.getElementById("question").style.display="block";


};






let answers = document.querySelectorAll(".answer");


answers.forEach(function(button){


button.onclick = function(){


for(let i=0;i<25;i++){


let heart = document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"%";


document.getElementById("hearts").appendChild(heart);



setTimeout(function(){

heart.remove();

},4000);



}


};


});
