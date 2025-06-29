<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// ===== Send Email =====
$to = "franciswawerumwaura003@gmail.com"; // Replace with your real email
$subject = "New Message from Website";
$body = "Name: $name\nEmail: $email\nMessage: $message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

mail($to, $subject, $body, $headers);

// ===== Store in Database =====
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "my_website";


$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Database connection failed: " . $conn->connect_error);
}

// Insert into table
$sql = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
  echo "Message sent and stored successfully.";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
