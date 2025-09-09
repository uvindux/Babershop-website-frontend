<?php

function emptyInputSignup($name,$email,$psw){
          $result;

          if (empty($name) || empty ($email) ||empty ($psw) ){
                    $result=true;
          }
          else
          {
                    $result=false;
          }








}

function invalidUid($name){
          $result;

          if (!preg_match("/^[a-zA-Z0-9]*$/",$name)){
                    $result=true;
          }

                    else {
                              $result=false;

                    }

}

function invalidEmail($email){
          $result;

          if (!filter_var($email,FILTER_VALIDATE_EMAIL)) {

                    $result=true;
          }
          else
          {
                    $result=false;
          }

}
function uidExists($conn,$name,$email){
          $sql="SELECT * FROM customers WHERE CustomersUid = ? CustomerEmail ?;";
          $stmt=mysqli_stmt_init($conn);
          if (!mysqli_stmt_prepare($stmt,$sql)){
                    header("Location: ../Includ/signin.php?error=stmfailed");
                    exit();


          }
          

         
}


?>