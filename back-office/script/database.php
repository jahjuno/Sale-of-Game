<?php 
class Connect_bdd{
    protected function dbconnect(){
        $bdd = new PDO('mysql:host=localhost;dbname=gstore','gaetan','gaetan') or die('not connect');
	return $bdd;
    }
}
?>
