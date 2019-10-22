function capitale(texte) {
	// atao majuscule premiere lettre
	return texte.charAt(0).toUpperCase() + texte.slice(1);
}


function inscription(){
	
	let nom = $("#inscrire input[name=nom]"); // alaina le champ ana texte ampidirana anarana
	let prenom = $("#inscrire input[name=prenom]"); // karan'le ambony fogn fa porenom ndrek raika ty
	let mail = $("#inscrire input[name=mail]"); // mangalaka an le mail nsoratana
	let pass1 = $("#inscrire input[name=password]");  // l objet html mot de passe
	let pass2 = $("#inscrire input[name=cpassword]");  // le confirmationy e
	let error = $("#inscrire p[name=erreur]");
	if ((/^[a-zA-Z]{3,}$/).test(nom.val())) // verifiena fa lettre ihany no nampidiriny de telo farafahakeliny
	{
		if ((/^[a-zA-Z ']{3,}$/).test(prenom.val())) // verifiena kar le anarana takeo fa afaka asina espace raika ty
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
			nom: nom.toUpperCase(),
			prenom:capitale(prenom),
			mail: mail,
			password: password
		},
		feed_back
		);
		
		function feed_back(response){
			if (response == 1){
				$('#inscrire').modal('hide');
				$('#success').modal('show');
			}
			else{
				$("#inscrire p[name=erreur]").text(response);
			}
		}
	}
	
	
function verifie_password(){
	let mail = $('#connecter input[name=mail]');
	let password = $('#connecter input[name=password]');
	let error = $('#connecter p[name=erreur]');
	
	if (/^[a-zA-Z]{1}[a-zA-Z_.0-9]{1,}@[a-z]{3,}.[a-z]{2,4}$/.test(mail.val())){
		$.post(
			'back-office/script/service.php',
			{
				connexion: 1,
				mail: mail.val(),
				password: password.val()
			},
			feed_back
			);
			
			function feed_back(rep){
				if (rep == 1){
					// $("#connecter").modal('hide');
					error.text('');
					html = "<div class='form-group'>";
					html += '<input type="text" class="form-control" style="border-right: none !important; border-left: none !important; border-top:none !important; font-family: Poppins !important; font-size: 15px !important;" placeholder="Votre numéro de token Orange Money" required="required">';
					html += "</div>";
					$("#connecter .forgetpass").remove(); // fafana le soratra mdp oublié iny
					form = $("#connecter .farany"); // selectionner le form
					but = $("#connecter .bouton"); // selectionneko le button
					
					form.append(html);
					form.append(but);
					form.prepend($('#sary'))
					$('#connecter input[type=button]').attr('value', 'Confirmer Achat');
					mail.attr('disabled', 'disabled');
					password.attr('disabled', 'disabled');
					$("#connecter .modal-title").html("Acheter le Jeu");
				}
				else{
					error.text(rep);
				}
			}
		}
		else{
			error.text("Ce mail n'est pas valide: " + mail.val());
		}
		
		
}


$(function() {
	$.post(
		'back-office/script/service.php',
		{
			gamelist: 1,
		},
		list_game
	);

	function list_game(data){
		dataP = new Array(JSON.parse(data));

		Mmod = $('#play');
		
		mod = $('#game_model');
		for (i=0;i<dataP[0].length;i++){
			tmp = mod.clone();
			tmp.attr('id', dataP[0][i][1])
			tmp.css('display', 'block');
			tmp.find('img').attr('src', dataP[0][i][2]);
			tmp.find('h6>a').text(dataP[0][i][1]);
			tmp.find('#cat').text(dataP[0][i][3]);
			tmp.find('.playB').attr('href','#play'+ dataP[0][i][0]);

			mod.parent().append(tmp);
			
			Mtmp = Mmod.clone();
			Mtmp.attr('id', 'play'+dataP[0][i][0]);
			Mtmp.find('h4').text("Gameplay de " + dataP[0][i][1]);
			Mtmp.find('h6').text(dataP[0][i][1]);
			Mtmp.find('source').attr('src', dataP[0][i][4]);
			Mtmp.find('.text-muted').text(dataP[0][i][3]);

			Mmod.after(Mtmp);

			$('#listSearch').append('<option>' + dataP[0][i][1] + '</option>')
		}
		Mmod.remove();
		mod.remove();
	}
});

		
function search_game(value){
	window.location = '#' + value;
}


function closeAndPause(){
	$(".videoplay").each(function(){
		$(this).get(0).pause();
	});
}