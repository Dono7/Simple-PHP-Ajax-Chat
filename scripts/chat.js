// Fetch the messages from PHP with AJAX request
// And then render it into the HTML page with jQuery
function getMessagesAndRender() {
	$.get("getMessages.php", function (data) {
		renderMessages(data)
	})
}

// Use the Json and transform it into HTML with jQuery
function renderMessages(data) {
	$("#chat-messages").html("")
	data.forEach(function (message) {
		$("#chat-messages").append(`<div class="message">${message.username} : ${message.text}</div>`)
	})
}

// Refresh the messages every 2 seconds
setInterval(() => {
	getMessagesAndRender()
}, 2000)
