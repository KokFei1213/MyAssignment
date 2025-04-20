<?php
// updateReview.php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_review";

// Read JSON body
$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'];
$review = $data['review'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Update query
$stmt = $conn->prepare("UPDATE reviews SET review = ? WHERE id = ?");
$stmt->bind_param("si", $review, $id);

if ($stmt->execute()) {
    echo "Review updated successfully!";
} else {
    echo "Error updating review.";
}

$stmt->close();
$conn->close();
?>

