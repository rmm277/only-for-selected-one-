document.getElementById("startBtn").onclick = function() {

    document.getElementById("main").style.opacity = "0";

    setTimeout(function(){

        document.getElementById("main").style.display = "none";

        document.getElementById("gallery").style.display = "block";

    },1000);

};
