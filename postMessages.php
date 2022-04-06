<?php
require_once "utils/Chat.php";
$chat = new Chat();

// Adding the message to the chat
// Supposing that the client sent a correct request with the 3 fields: name, message and time
$messageToAdd = new stdClass();
$messageToAdd->username = $_POST['username'];
$messageToAdd->message = $_POST['message'];
$messageToAdd->time = $_POST['time'];

$chat->addMessage($messageToAdd);

// Returning the new messages list so that the client can update the chat
$messages = $chat->getMessages();
header('Content-Type: application/json');
echo json_encode($messages);

