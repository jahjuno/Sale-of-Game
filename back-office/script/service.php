<?php

require('./Connect_bdd.php');

if (isset($_POST['inscription'])){
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];

    $query = new Query_bdd();
    echo $query->inscription($nom, $prenom, $mail, $phone, $password);

}


if (isset($_POST['connexion'])){
  $mail = $_POST['mail'];
  $password = $_POST['password'];

  $query = new Query_bdd();
  echo $query->connexion($mail, $password);
}


if (isset($_POST['gamelist'])){
  $query = new Query_bdd();
  echo $query->all_games();
}

?>
