function calucle_Ovulation(){
       
        var recup_date1 = document.getElementById("premier_j").value;
        var jour_date1 = new Date(recup_date1);
        var recup_date2 = document.getElementById("deuxieme_j").value;
        var jour_date2 = new Date(recup_date2);
        if (jour_date1 > jour_date2){
                var difference = (jour_date1 - jour_date2)/86400000; //conversion en jour 
                jour_ovulation = difference - 14;
                
                convertir = jour_date1.setDate(jour_date1.getDate() + jour_ovulation);
                convertir2 = new Date(convertir);
                convertir2.setDate(convertir2.getDate() + 14);
                

                $("#resultat2").html("<br>"+"<strong>"+"Votre durée de cycle :" +difference+ "<br>"+ " jours" +
                "Votre jour d'ovulation :" +" le "+jour_ovulation+"ème jour" +"("+convertir2+")"+"</strong>");
                
        }
        else if (jour_date1 < jour_date2){
                
                var difference = (jour_date2 - jour_date1)/86400000;
                jour_ovulation = difference - 14;

                convertir = jour_date1.setDate(jour_date1.getDate() + jour_ovulation);
                convertir2 = new Date(convertir);
                

                $("#resultat2").html("<br>"+"<strong>"+"Votre durée de cycle : "+difference+" jours"+ "<br>"+
                "Votre jour d'ovulation : "+"le "+jour_ovulation+" ème jour" +"("+convertir2+ ")"+"</strong>");
                
        }

        
    
}

function calucle_Ovulation2(){
        recup_date1 = document.getElementById("premier_j1").value;
        recup_jour1 = new Date(recup_date1);
        recup_cycle = document.getElementById("jour_cycle").value;
        jour_ovulation = recup_cycle - 14;

        convertion = recup_jour1.setDate(recup_jour1.getDate()+jour_ovulation); //mamadika ny jour d'ovulation ho date exacte
        convertion2 = new Date(convertion); //omena ny jour exacte rehefa avy eo 

        convertion2.setDate(convertion2.getDate() + 14); //prochaine règle
        
        
        $("#resultat1").html("<br>" +"<strong>" + "Votre jour d'ovulation : "+" le "+ jour_ovulation +
        " ème jour"+"<br>" + "(" + new Date(convertion) + ")" + "<br>Votre prochaine règle est le " + convertion2+ "</strong>");
}