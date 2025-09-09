<!-- <?php

if (isset($_POST["submit"])){
          $username=$_POST["email"];
          $password=$_POST["password"];

          require_once "dbh.inc.php";
          require_once "function.inc.php";

          if(emptyInputLogin($username,$password) !== false){ 
                    exit();
          }
          else {
                    LoginUser($conn,$username,$password);
          }

}
else {

          header("Location: ../Include/login.php");

}