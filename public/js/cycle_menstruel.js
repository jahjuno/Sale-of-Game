function calucle_Ovulation(){
       
        var recup_date1 = document.getElementById("premier_j").value;
        var jour_date1 = new Date(recup_date1);
        var recup_date2 = document.getElementById("deuxieme_j").value;
        var jour_date2 = new Date(recup_date2);
        if (jour_date1 > jour_date2){
                var difference = (jour_date1 - jour_date2)/86400000; //conversion en jour 
                // document.getElementById("resultat2").innerHTML = difference + "j";
                alert("Vous avez le cycle de " + (difference + 1) + " jours");
        }
        else if (jour_date1 < jour_date2){
                var difference = (jour_date2 - jour_date1)/86400000;
                // document.getElementById("resultat2").innerHTML = difference + "j";
                alert("Vous avez le cycle de " + (difference + 1) + " jours");
        }

        
    
}

function calucle_Ovulation2(){
        recup_date1 = document.getElementById("premier_j1").value;
        recup_date1_tranform = new Date(recup_date1);
        recup_cycle = document.getElementById("jour_cycle").value;
        jour_ovulation = recup_cycle - 14;
        alert("Jour d'ovulation " + jour_ovulation + " ème jour et la prochaine règle >>> " + recup_date1_tranform);
}