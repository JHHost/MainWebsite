fetch("/footer.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector("footer").innerHTML = data;
	});

fetch("/header.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector("header").innerHTML = data;
	});