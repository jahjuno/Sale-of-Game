<?php

require('./Connect_bdd.php');

if (isset($_POST['inscription'])){
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $mail = $_POST['mail'];
    $password = $_POST['password'];

    $query = new Query_bdd();
    echo $query->inscription($nom, $prenom, $mail, $password);

}


if (isset($_POST['connexion'])){
  $mail = $_POST['mail'];
  $password = $_POST['password'];

  $query = new Query_bdd();
  echo $query->connexion($mail, $password);
}

?>
