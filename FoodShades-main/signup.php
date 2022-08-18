<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "one";

    $con = new mysqli($host, $user, $pass, $db);
    if(!$con)
    {
        echo "There is some error";

    }
    
$email = $_POST['email'];
$password = $_POST['password'];

$qry = "INSERT_INTO 'table1'('email', 'password') VALUES('$email','$password')";
$insert = mysqli_query($con,$qry);
if(!$insert){
    echo "There is some problem";

}
else{
    echo "Data inserted";
}

?>