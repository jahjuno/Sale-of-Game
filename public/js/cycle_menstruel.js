function calucle_Ovulation(){
       
        var recup_date1 = document.getElementById("premier_j").value;
        var jour_date1 = new Date(recup_date1);
        var recup_date2 = document.getElementById("deuxieme_j").value;
        var jour_date2 = new Date(recup_date2);
        if (jour_date1 > jour_date2){
                var difference = (jour_date1 - jour_date2)/86400000; //conversion en jour 
                jour_ovulation = difference - 14;
                $("#resultat2").html("<br>"+"<strong>"+"Votre durée de cycle :" +difference+ "<br>"+ " jours" +
                "Votre jour d'ovulation :" +" le "+jour_ovulation+"ème jour" +"</strong>");
                
        }
        else if (jour_date1 < jour_date2){
                
                var difference = (jour_date2 - jour_date1)/86400000;
                jour_ovulation = difference - 14;
                $("#resultat2").html("<br>"+"<strong>"+"Votre durée de cycle : "+difference+" jours"+ "<br>"+
                "Votre jour d'ovulation : "+"le "+jour_ovulation+" ème jour" + "</strong>");
                
        }

        
    
}

function calucle_Ovulation2(){
        recup_date1 = document.getElementById("premier_j1").value;
        recup_date1_transform = new Date(recup_date1);
        recup_cycle = document.getElementById("jour_cycle").value;
        jour_ovulation = recup_cycle - 14;
        convertir = recup_date1_transform.setDate(recup_date1_transform.getDate + jour_ovulation);
        $("#resultat1").html("<br>" +"<strong>" + "Votre jour d'ovulation : "+" le "+ jour_ovulation +" ème jour"+"<br>" + convertir + "</strong>");
}