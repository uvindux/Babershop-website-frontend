<?php

$serverName="localhost";
$dbUsername="DeamonHair";
$dbPassword="t0G4Hh7jNDLtxMok";
$dbName="babershop_login";

$conn=mysqli_connect($serverName,$dbUsername,$dbPassword,$dbName);

if(!$conn){
          die("Connection failed :".mysqli_connect_error());
}
else{
          echo"Its Working";}