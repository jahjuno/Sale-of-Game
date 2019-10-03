<?php

require('./Connect_bdd.php');

if (isset($_POST['inscription'])){
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $mail = $_POST['mail'];
    $password = $_POST['password'];

    $query = new Query_bdd();
    $ret = $query->inscription($nom, $prenom, $mail, $password);

    echo $ret;

}

?>
