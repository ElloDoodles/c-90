function back() {
    window.location = "activity_1.html";
}

function get() {
    var score = localStorage.getItem("score");

    document.getElementById("div_1").innerHTML = "<h2> score: " + score + "</h2>";
}