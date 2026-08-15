fetch("/footer.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		let footer = document.querySelector("footer");
		if (footer != null) footer.innerHTML = data;	
	});

fetch("/header.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		let header = document.querySelector("header");
		if (header != null) header.innerHTML = data;
	});