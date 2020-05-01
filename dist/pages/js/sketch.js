var count = 0;
var colours = ["red", "orange", "green", "pink", "blue"];
function countplus() {
	count += 1;
	document.getElementById("num").innerHTML = count;
	document.getElementById("num").style = "color: " + colours[Math.floor(Math.random() * colours.length)] + "; transition: 0.8s;";
}
