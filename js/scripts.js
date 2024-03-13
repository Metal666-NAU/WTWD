onload = () => console.log("Document loaded!");

let mousePositionXLabel = document.getElementById("mousePositionXLabel");
let mousePositionYLabel = document.getElementById("mousePositionYLabel");

addEventListener("mousemove", (mouseEvent) => {
	mousePositionXLabel.innerText = `x: ${mouseEvent.x}`;
	mousePositionYLabel.innerText = `y: ${mouseEvent.y}`;
});

let textInput = document.getElementById("textInput");
let textInputSelection = document.getElementById("textInputSelection");
let textInputSelectionStart = document.getElementById(
	"textInputSelectionStart"
);
let textInputSelectionEnd = document.getElementById("textInputSelectionEnd");

textInput.addEventListener("select", (event) => {
	textInputSelection.innerText = `Selection: ${textInput.value.substring(
		event.target.selectionStart,
		event.target.selectionEnd
	)}`;
	textInputSelectionStart.innerText = `Selection start: ${textInput.selectionStart}`;
	textInputSelectionEnd.innerText = `Selection end: ${textInput.selectionEnd}`;
});
