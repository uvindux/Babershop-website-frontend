
<?php
require_once "dbh.inc.php";
require_once "function.inc.php";

if (isset($_POST["submit"])) {
    $name  = $_POST["fullName"];
    $email = $_POST["Email"];
    $psw   = $_POST["password"];

    // Validation
    if (emptyInputSignup($name, $email, $psw) !== false) {
        header("Location: ../Include/signin.php?error=emptyinput");
        exit();
    }
    if (invalidUid($name) !== false) {
        header("Location: ../Include/signin.php?error=invalidUsername");
        exit();
    }
    if (invalidEmail($email) !== false) {
        header("Location: ../Include/signin.php?error=invalidEmail");
        exit();
    }
//     if (uidExists($conn, $name, $email) !== false) {
//         header("Location: ../Include/signin.php?error=userExists");
//         exit();
//     }

    // Create user
    createUser($conn, $name, $email, $psw);

    // ✅ After signup, redirect (choose what you want)
    header("Location: ../Include/login.php?signup=success");
    exit();

} else {
    header("Location: ../Include/login.php");
    exit();
}
