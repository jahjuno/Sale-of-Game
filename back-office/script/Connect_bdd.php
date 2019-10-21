<?php
require('./database.php');

class Query_bdd extends Connect_bdd{

  public function inscription($nom, $prenom, $mail, $passwd){
    $bdd = $this->dbconnect();
    $yet_mail = $bdd->query("SELECT 1 FROM Membre WHERE Mail='$mail'");

    if ($yet_mail->rowCount() == 0){
      $ajouter = $bdd->prepare("INSERT INTO Membre(Nom, Prenom, Mail, Password) values(? , ? , ? , ?)");
      $ajouter->execute(array($nom, $prenom, $mail, sha1($passwd)));
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
            return true;
        }
    }

  }
}
?>
