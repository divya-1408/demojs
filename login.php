<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$password = $data['password'];

$res = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");
$user = mysqli_fetch_assoc($res);

if ($user && password_verify($password, $user['password'])) {
  echo "Login successful";
} else {
  echo "Invalid credentials";
}
?>
