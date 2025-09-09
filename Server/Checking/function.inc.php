<?php

function emptyInputSignup($name, $email, $psw) {
    return (empty($name) || empty($email) || empty($psw));
}

function invalidUid($name) {
    return !preg_match("/^[a-zA-Z0-9 ]*$/", $name); // allow spaces in name
}

function invalidEmail($email) {
    return !filter_var($email, FILTER_VALIDATE_EMAIL);
}

function uidExists($conn, $email) {
    $sql = "SELECT * FROM customers WHERE CustomerEmail = ?;";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("Location: ../Include/signin.php?error=stmfailed");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    $resultData = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($resultData)) {
        return $row;
    } else {
        return false;
    }
    mysqli_stmt_close($stmt);
}

function createUser($conn, $name, $email, $psw) {
    $sql = "INSERT INTO customers(CustomerName, CustomerEmail, CustomerPassword) VALUES (?,?,?);";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("Location: ../Include/signin.php?error=stmfailed");
        exit();
    }

    $hashedPwd = password_hash($psw, PASSWORD_DEFAULT);

    mysqli_stmt_bind_param($stmt, "sss", $name, $email, $hashedPwd);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
}


?>