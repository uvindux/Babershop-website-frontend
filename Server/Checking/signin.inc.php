<?php
require_once "dbh.inc.php";
require_once "function.inc.php";

if (isset($_POST["submit"])) {
    $name  = $_POST["fullName"];
    $email = $_POST["Email"];
    $psw   = $_POST["password"];

    
    if (emptyInputSignup($name, $email, $psw) !== false) {
        die("DEBUG: empty input");
        header("Location: ../Include/signin.php?error=emptyinput");
        exit();
    }
    if (invalidUid($name) !== false) {
        die("DEBUG: invalid username");
        header("Location: ../Include/signin.php?error=invalidUsername");
        exit();
    }
    if (invalidEmail($email) !== false) {
        die("DEBUG: invalid email");
        header("Location: ../Include/signin.php?error=invalidEmail");
        exit();
    }
   

    // Create user
    createUser($conn, $name, $email, $psw);
   
    // ✅ After signup, redirect (choose what you want)
    header("Location: ../Include/login.php?signup=success");
    exit();

} else {
    die("DEBUG: not a POST submit");
    header("Location: ../Include/login.php");
    exit();
}
