function btnHandler() {
	let input = document.getElementById("roman").value;
	let p = document.createElement("p");
	p.append(toArabic(input));
	document.body.appendChild(p);
}
let btn = document.getElementById("submit");
btn.addEventListener("click", btnHandler);