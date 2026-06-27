document.getElementById("startBtn").onclick = function() {


document.getElementById("main").style.opacity = "0";


setTimeout(function(){


document.getElementById("main").style.display = "none";


document.getElementById("finger").style.display = "block";


},1000);


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
document.getElementById("fingerBtn").onclick = function(){

document.getElementById("finger").innerHTML =
"<h2>✅ Доступ разрешён</h2><p>Добро пожаловать...</p>";

};
