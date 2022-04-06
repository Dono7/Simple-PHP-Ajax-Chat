function getMessages() {
	$.get("getMessages.php", function (data) {
		console.log(data)
	})
}

setInterval(() => {
	getMessages()
}, 2000)
