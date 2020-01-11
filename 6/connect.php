<?php $connection = new mysqli('localhost','root','arkademy')
if(!$connection){
    echo "connection error!"
    exit();
}