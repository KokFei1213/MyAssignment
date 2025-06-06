<?php
// filepath: c:\Program Files\Ampps\www\Assignment\ReviewForum.php

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

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $country = htmlspecialchars($_POST['country']);
    $rating = htmlspecialchars($_POST['rating']);
    $review = htmlspecialchars($_POST['review']);

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO reviews (name, country, rating, review) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssis", $name, $country, $rating, $review);

    if ($stmt->execute()) {
        $thankYouMessage = "Thank you for your review! Would you like to <a href='ReviewForm.html'>leave another review</a>? If not, <a href='index.html'>go back to the homepage</a>.";
    } else {
        $thankYouMessage = "An error occurred while submitting your review. Please try again later.";
    }

    // Close the statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You</title>
    <link rel="stylesheet" href="ReviewForm.css">
    <style>
        .thank-you-message {
            text-align: center;
            margin: 50px auto;
            padding: 20px;
            font-size: 1.5em;
            color: #333;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 10px;
            width: 50%;
        }
        .thank-you-message a {
            color: #007BFF;
            text-decoration: none;
            font-weight: bold;
        }
        .thank-you-message a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="thank-you-message">
        <?php echo $thankYouMessage; ?>
    </div>
</body>
</html>



