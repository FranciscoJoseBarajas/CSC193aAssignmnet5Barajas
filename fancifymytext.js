// Makes bigger by your hint, thanks
function makeBigger() {
    document.getElementById("textBox").style.fontSize = "24pt";
}
//makes the style change
function changeStyle() {
    let textBox = document.getElementById("textBox");
    // fancy part
    if (document.getElementById("fancy").checked) {
        alert("FancyShmancy");
        // makes bold, blue and underlined
        textBox.style.fontWeight = "bold";
        textBox.style.color = "blue";
        textBox.style.textDecoration = "underline";
    }
    // default
    if (document.getElementById("boring").checked) {
        alert("BoringBetty selected!");
        // makes normal text black with no decorations
        textBox.style.fontWeight = "normal";
        textBox.style.color = "black";
        textBox.style.textDecoration = "none";
    }
}
function mooText() {
    var textBox = document.getElementById("textBox");
    // gets the text
    var str = textBox.value;
    // makes upper case
    str = str.toUpperCase();
    // when a sentence ends with "."
    var parts = str.split(".");
    // adds the -moo at the end with a period
    str = parts.join("-Moo.");
    //saves the text, was stuck here for a second
    textBox.value = str;
}