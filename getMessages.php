<?php
require_once "utils/Chat.php";
$chat = new Chat();

$messages = $chat->getMessages();

// Return json data
header('Content-Type: application/json');
echo json_encode($messages);
