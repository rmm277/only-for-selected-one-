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

document.getElementById("finger").style.display = "block";

document.getElementById("finger").classList.add("fade");

document.getElementById("gallery").style.display = "block";

document.getElementById("gallery").classList.add("fade");
