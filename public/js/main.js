function inscription(){

  var nom = $("#inscrire input[name=nom]"); // alaina le champ ana texte ampidirana anarana
  var prenom = $("#inscrire input[name=prenom]"); // karan'le ambony fogn fa porenom ndrek raika ty
  var mail = $("#inscrire input[name=mail]"); // mangalaka an le mail nsoratana
  var pass1 = $("#inscrire input[name=password]");  // l objet html mot de passe
  var pass2 = $("#inscrire input[name=cpassword]");  // le confirmationy e
  var error = $("#inscrire p[name=erreur]");
  if ((/^[a-zA-Z]{3,}$/).test(nom.val())) // verifiena fa lettre ihany no nampidiriny de telo farafahakeliny
  {
    if ((/^[a-zA-Z ]{3,}$/).test(prenom.val())) // verifiena kar le anarana takeo fa afaka asina espace raika ty
    {
      if (/^[a-zA-Z]{1}[a-zA-Z_.0-9]{1,}@[a-z]{3,}.[a-z]{2,4}$/.test(mail.val()))  // verifiena hoe tena pozina mail marna io sa tsia
      {
        if (pass1.val().length > 6) // verifiena sod ambaniny ny fito ny alavany mot de apsse
        {
          if (pass1.val() === pass2.val()) // verifiena oe mitovy le mot de passe nosoratana
          {
              sInscrire(nom.val(), prenom.val(), mail.val(), pass1.val());
          }
          else{
            error.text("Le mot de passe ne correspond pas"); // mampiseho text d erreur
          }
        }
        else{
          error.text("Votre mot de passe est trop court");
        }

      }
      else{
        error.text("Ce mail n'est pas valide: " + mail.val());
      }
    }
    else {
      error.text("Ce prenom n'est pas valide: " + prenom.val());
    }

  }
  else{
    error.text("Ce nom n'est pas valide: " + nom.val());
  }

}

function sInscrire(nom, prenom, mail, password){
  $.post(
    'back-office/script/service.php',
    {
      inscription: 1,
      nom: nom,
      prenom: prenom,
      mail: mail,
      password: password
    },
    feed_back
  );

  function feed_back(response){
      if (response == 1){
          alert('ok');
      }
      else{
        $("#inscrire p[name=erreur]").text(response);
      }
  }
}
