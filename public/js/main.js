function capitale(texte) {
	// atao majuscule premiere lettre
	return texte.charAt(0).toUpperCase() + texte.slice(1);
}


function makespace(number){
	let numList =  number.toString().split('');
	let newnumber = new Array();
	let j = 0;

	for (let i=0;i<numList.length;i++){
		if (i%3==0 && i!=0){
			newnumber[j] = ' ';
			j++;
		}
		newnumber[j] = numList[numList.length - 1 - i];
		j++;
	}
	return newnumber.reverse().join('');
}


function sleep(ms) {
	// fonction pour faire une petite  sleep 
	return new Promise(resolve => setTimeout(resolve, ms));
  }


function inscription(){
	
	let nom = $("#inscrire input[name=nom]"); // alaina le champ ana texte ampidirana anarana
	let prenom = $("#inscrire input[name=prenom]"); // karan'le ambony fogn fa porenom ndrek raika ty
	let mail = $("#inscrire input[name=mail]"); // mangalaka an le mail nsoratana
	let phone = $("#inscrire input[name=phone]"); // numero telephone
	let pass1 = $("#inscrire input[name=password]");  // l objet html mot de passe
	let pass2 = $("#inscrire input[name=cpassword]");  // le confirmationy e
	let error = $("#inscrire p[name=erreur]");
	if ((/^[a-zA-Z]{3,}$/).test(nom.val())) // verifiena fa lettre ihany no nampidiriny de telo farafahakeliny
	{
		if ((/^[a-zA-Z ']{3,}$/).test(prenom.val())) // verifiena kar le anarana takeo fa afaka asina espace raika ty
		{
			if (/^[a-zA-Z]{1}[a-zA-Z_.0-9]{1,}@[a-z]{3,}.[a-z]{2,4}$/.test(mail.val()))  // verifiena hoe tena pozina mail marna io sa tsia
			{
				if (/^03[2349]{1}[0-9]{7}$/.test(phone.val())){
					if (pass1.val().length > 6) // verifiena sod ambaniny ny fito ny alavany mot de apsse
					{
						if (pass1.val() === pass2.val()) // verifiena oe mitovy le mot de passe nosoratana
						{
							sInscrire(nom.val(), prenom.val(), mail.val(), phone.val(), pass1.val());
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
					error.text("Veuiller entre un numero valide de 10 chiffres");
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

function sInscrire(nom, prenom, mail, phone, password){
	$.post(
		'back-office/script/service.php',
		{
			inscription: 1,
			nom: nom.toUpperCase(),
			prenom:capitale(prenom),
			mail: mail,
			phone: phone,
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
	
	
function verifie_password(obj){
	let mail = obj.find('input[name=mail]');
	let password = obj.find('input[name=password]');
	let error = obj.find(' p[name=erreur]');
	
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
				if (/^03[2349]{1}[0-9]{7}$/.test(rep)){
					switch (rep.slice(0,3)) {
						case '032':
							ops = 'Orange Money' ;
							break;

						case '033':
							ops = 'Airtel Money';
							break;
						
						case '034':
							ops = 'Mvola';
							break;

						default:
							ops = 'Mobile Money';

					};

					error.text('');
					html = "<div class='form-group'>";
					html += `<input type="text" class="token form-control" style="border-right: none !important; border-left: none !important; border-top:none !important; font-family: Poppins !important; font-size: 15px !important;" placeholder="Votre numéro de token ${ops} (4 chiifres)" required="required">`;
					html += "</div>";
					but = obj.find(" .bouton"); // selectionneko le button
					obj.append(html);
					obj.append(but);
					obj.find(' input[type=button]').attr('value', 'Confirmer Achat');
					obj.find(' input[type=button]').removeAttr('onclick');
					obj.find(' input[type=button]').click({mail: mail.val(), prod: obj.parents('.modal').find('img').attr('alt'), objet: obj.find(' input[type=button]')}, processAchat);
					mail.attr('disabled', 'disabled');
					password.attr('disabled', 'disabled');
					obj.find(" .modal-title").html("Acheter le Jeu");
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


async function processAchat(event){
	val = event.data.objet.parents('form').find('.token').val();
	if (/^[0-9]{4}$/.test(val)){
		mail = event.data.mail;
		game = event.data.prod;
		html = `<div class='form-group'> <img style="margin-left: 46%; margin-right: 48%" src='public/images/loading.gif' alt="chargement..."/> </div>`;
		event.data.objet.parent().after(html);
		await sleep(4000);
		event.data.objet.parents('.modal').modal('hide');
		$('#successdown').find('h4').text($('#successdown').find('h4').text() + game);
		$('#successdown').find('.mailsend').html($('#successdown').find('.mailsend').text() + `<strong>${mail}</strong>`);
		$('#successdown').modal('show');
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
		buy = $('#acheter');
		mod = $('#game_model');
		for (let i=0;i<dataP[0].length;i++){
			tmp = mod.clone();
			tmp.attr('id', dataP[0][i][1])
			tmp.css('display', 'block');
			tmp.find('img').attr('src', dataP[0][i][2]);
			tmp.find('h6>a').text(dataP[0][i][1]);
			tmp.find('#cat').text(dataP[0][i][3]);
			tmp.find('.price').text(makespace(dataP[0][i][5]) + " Ar");
			tmp.find('.playB').attr('href','#play'+ dataP[0][i][0]);
			tmp.find('.achatB').attr('href','#acheter'+ dataP[0][i][0]);
			tmp.find('.coeurIcon').attr('id', 'coeurIcon' + dataP[0][i][0]);
			mod.parent().append(tmp);
			
			Mtmp = Mmod.clone();
			Mtmp.attr('id', 'play'+dataP[0][i][0]);
			Mtmp.find('h4').text(dataP[0][i][1]);
			Mtmp.find('h6').text(dataP[0][i][1]);
			Mtmp.find('source').attr('src', dataP[0][i][4]);
			Mtmp.find('.text-muted').text(dataP[0][i][3]);
			Mtmp.find('.pricemodal').text(makespace(dataP[0][i][5]) + " Ar");
			Mtmp.find('.achatB').attr('href','#acheter'+ dataP[0][i][0]);
			Mtmp.find('.coeurIcon').attr('id', 'coeurIconModal' + dataP[0][i][0]);

			Mmod.after(Mtmp);

			$('#listSearch').append('<option style="color:red;">' + dataP[0][i][1] + '</option>')

			buyTmp = buy.clone();
			buyTmp.attr('id', 'acheter' + dataP[0][i][0]);
			buyTmp.find('img').attr('src', dataP[0][i][2]);
			buyTmp.find('img').attr('alt', dataP[0][i][1]);

			buy.after(buyTmp);
		}
		buy.remove();
		Mmod.remove();
		mod.remove();
		closeAndPauseEvent();
	}


});


		
function search_game(value){
	window.location = '#' + value;
	$("[id='" + value + "']").find('h6>a').animate({color:'red', fontSize:'30px'}, 500, function (){
		$(this).animate({color:'#212529', fontSize:'17.6px'}, 500)
	});	
}


function closeAndPause(){
	$(".videoplay").each(function(){
		$(this).get(0).pause();
	});
}


function closeAndPauseEvent(){
	$('.playvideo').each(function (){
		$(this).on('hide.bs.modal', function (){
			closeAndPause();
		});
	});
}


function heartMe(val){
	$('#' + val).animate({fontSize: 25, opacity: 2}, 400, function(){
		$(this).animate({fontSize:14, opacity: 15}, 300);
	});
}