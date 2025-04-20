<?php
// deleteReview.php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_review";

// Get ID from query parameter
$id = $_GET['id'];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Delete query
$stmt = $conn->prepare("DELETE FROM reviews WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo "Review deleted successfully!";
} else {
    echo "Error deleting review.";
}

$stmt->close();
$conn->close();
?>

