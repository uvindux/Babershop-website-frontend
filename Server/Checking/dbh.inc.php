<?php

$serverName="localhost";
$dbUsername="Babershop";
$dbPassword="ixqN-L[8PVm-_hRj";
$dbName="babershop_login";

$conn=mysqli_connect($serverName,$dbUsername,$dbPassword,$dbName);

if(!$conn){
          die("Connection failed :".mysqli_connect_error());
}
else{
          echo"Its Working";}