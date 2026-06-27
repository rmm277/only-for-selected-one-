document.getElementById("startBtn").onclick = function() {


document.getElementById("main").style.opacity = "0";


setTimeout(function(){


document.getElementById("main").style.display = "none";


document.getElementById("gallery").style.display = "block";


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
