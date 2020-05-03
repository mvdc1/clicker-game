var count = 0;
var colours = ["red", "orange", "green", "blue", "black"];
function countplus() {
	count += 1;
	if (count == 1) {
	document.getElementById("num").innerHTML = count + " click.";
	} else if(count !== 1) {
	document.getElementById("num").innerHTML = count + " clicks.";
	}
}
