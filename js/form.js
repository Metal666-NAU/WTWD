function clearUrl() {
	location = location.href.split("?")[0];
}

function changeFormMethod() {
	const mainForm = document.getElementById("form-main");
	const newMethod = mainForm.method == "get" ? "post" : "get";

	mainForm.method = newMethod;
	document.getElementById("form-main-method").textContent = newMethod;
}
