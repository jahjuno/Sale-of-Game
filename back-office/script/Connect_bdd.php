<?php
require('./database.php');

class Query_bdd extends Connect_bdd{

  public function inscription($nom, $prenom, $mail, $phone, $passwd){
    $bdd = $this->dbconnect();
    $yet_mail = $bdd->query("SELECT 1 FROM Membre WHERE Mail='$mail'");

    if ($yet_mail->rowCount() == 0){
      $ajouter = $bdd->prepare("INSERT INTO Membre(Nom, Prenom, Mail, Phone, Password) values(? , ? , ? , ?, ?)");
      $ajouter->execute(array($nom, $prenom, $mail, $phone, sha1($passwd)));
      return true;
    }
    else{
      return "Mail déjà existant";
    }

  }

  public function connexion($mail, $passwd){
    $bdd = $this->dbconnect();

    $yet_mail = $bdd->query("SELECT 1 FROM Membre WHERE Mail='$mail'");

    if ($yet_mail->rowCount() == 0){
        return "Adresse Mail Inconnu";
    }
    else{
        $passwd = sha1($passwd);
        $login = $bdd->query("SELECT 1 FROM Membre WHERE Mail='$mail' AND Password='$passwd'");

        if ($login->rowCount() == 0){
            return "Mot de passe Incorrecte";
        }
        else{
            return $this->info_user($mail)[0][4]; 
            // ceci retourne un tableau donc je recupere l indice du numero 
        }
    }

  }

  public function all_games(){
    $bdd = $this->dbconnect();
    $games = $bdd->query("SELECT * FROM Game");

    $all_games = $games->fetchall();

    return  json_encode($all_games);
  }


  public function info_user($mail){
    $bdd = $this->dbconnect();
    $user = $bdd->query("SELECT * FROM Membre WHERE Mail='$mail' ");

    return $user->fetchall();
  }
}


?>
