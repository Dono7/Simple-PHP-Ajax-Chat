<?php

class Chat {

	// Load the JSON file that contains all the messages
	private function loadMessagesJson() {
		$json = file_get_contents('../data/messages.json');
		$messages = json_decode($json, true);
		return $messages;
	}

	// Get all the messages
	public function getMessages() {
		return this->loadMessagesJson();
	}

	// Get the messages, add the new one, and then save it in the json
	private function addMessage($message) {
		$messages = this->loadMessagesJson();
		$messages[] = $message;
		$json = json_encode($messages);
		file_put_contents('../data/messages.json', $json);
	}

}
