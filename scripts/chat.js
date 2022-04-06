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
		$("#chat-messages").append(`<div class="message">${message.username} : ${message.message}</div>`)
	})
}

function sendMessage() {
	const username = $("#username").val()
	const message = $("#message").val()
	const time = new Date().toJSON() // Get the current time
	const data = { username, message, time }
	// Send the new message to the server
	$.post("postMessages.php", data, function (data) {
		// After sending the message, clear the input field
		// And update the messages
		$("#message").val("")
		renderMessages(data)
	})
}

// Refresh the messages every 2 seconds
setInterval(() => {
	getMessagesAndRender()
}, 2000)

// Cancel redirection and send message
$("#chat-form").submit(function (event) {
	event.preventDefault()
	sendMessage(event)
})
