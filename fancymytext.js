function message() {
    alert("Hello, world!");
}

function textLarge() {
    document.getElementById("first").style.fontSize = "24pt";
}

function upperCase() {
    var val = document.getElementById("first").value;
    val = val.toUpperCase();
    var parts = val.split(".");
    document.getElementById("first").value = parts.join("-Moo");
}

function fancyShmancy() {
    document.getElementById("first").style.fontWeight = "bold";
    document.getElementById("first").style.textDecoration = "underline";
    document.getElementById("first").style.color = "blue";
}

function boringBetty() {
    document.getElementById("first").style.fontWeight = "normal";
}