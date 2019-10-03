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
    $ajouter = $bdd->prepare("INSERT INTO Membre(Nom, Prenom, Mail, Password) values(? , ? , ? , ?)");
    $ajouter->execute(array($nom, $prenom, $mail, sha1($passwd)));
    return true;
  }
}
?>
