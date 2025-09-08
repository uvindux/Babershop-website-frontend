<?php

if (isset($_POST["submit"])){
          $name=$_POST["fullName"];
          $email=$_POST["Email"];
          $psw=$_POST["password"];


          require_once "dbh.inc.php";
          require_once "function.inc.php";
          $emptyInputs=emptyInputSignup($name,$email,$psw);
          $invalidUid=invalidUid($name);
          $invalidEmail=invalidEmail($email);
          $pwdMatch=pwdMatch($psw,$pwdMatch);
          $uidExist=uidExists($conn,$name,$email);


          if($emptyInputs !== false){
                    header("Location:../Include/signin.php?error=emptyinput");
                    exit();
          }
          if($invalidUid !== false){
                    header("Location:../Include/signin.php?error=invalidUsername");
                    exit();
          }
           if($invalidEmail !== false){
                    header("Location:../Include/signin.php?error=invalidEmail");
                    exit();
          }
           if($pwdMatch !== false){
                    header("Location:../Include/signin.php?error=passwordDontMatch");
                    exit();
          }
          if($uidExist !== false){
                    header("Location:../Include/signin.php?error=userExists");
                    exit();
          }
          
          else {
                    LoginUser($username,$password);
          }
             
          




}
else {

          header("Location :../Include/login.php"); 

}