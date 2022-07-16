var switchs = document.querySelectorAll("img")[1];
var bub = document.querySelectorAll("img")[0];
var soff = switchs.getAttribute("src");
var son = switchs.getAttribute("tsrc");
var lon = bub.getAttribute("tsrc");
var loff = bub.getAttribute("src");

function imgchange() {
    if (switchs.getAttribute("src") == "off.jpg") {
        switchs.setAttribute("src", son);
        bub.setAttribute("src", lon);
    } else {
        switchs.setAttribute("src", soff);
        bub.setAttribute("src", loff);
    }
}