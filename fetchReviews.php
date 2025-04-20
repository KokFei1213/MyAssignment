<?php
// filepath: c:\Program Files\Ampps\www\Assignment\fetchReviews.php

// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_review";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch all reviews from the database
$sql = "SELECT id, name, country, rating, review, created_at FROM reviews ORDER BY created_at DESC";
$result = $conn->query($sql);

$reviews = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $reviews[] = $row;
    }
}

// Return reviews as JSON
header('Content-Type: application/json');
echo json_encode($reviews);

$conn->close();
?>