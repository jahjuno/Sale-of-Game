<?php
class Connect_bdd{
    protected function dbconnect(){
        $bdd = new PDO('mysql:host=localhost;dbname=gstore','gaetan','gaetan') or die('not connect');
        return $bdd;
    }

}

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
}
?>
