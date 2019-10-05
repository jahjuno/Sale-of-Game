function resolution(){
    var a1, a2, a3, b1, b2, b3, c1, c2, c3, d1, d2, d3, x, y, z, detA;

    a1 = document.getElementById("a1").value;
    a2 = document.getElementById("a2").value;
    a3 = document.getElementById("a3").value;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    c1 = document.getElementById("c1").value;
    c2 = document.getElementById("c2").value;
    c3 = document.getElementById("c3").value;
    d1 = document.getElementById("d1").value;
    d2 = document.getElementById("d2").value;
    d3 = document.getElementById("d3").value;
    /* calcule determinat de la matrice
     A (a1,a2,a3)    (d1)
       (b1,b2,b3)  = (d2)
       (c1,c2,c3)    (d3)
    */
   detA = (((a1*b2*c3) + (b1*c2*a3) + (c1*a2*b3)) - ((a3*b2*c1) + (b2*c2*a1) +(c3*a2*b1)));

   //calcule de x, y, z
   x = (((d1*b2*c3) + (b1*c2*d2) + (c1*d2*b3)) - ((d3*b2*c1) + (b3*c2*d1) + (c3*d2*b1))) / detA;
   y = (((a1*d2*c3) + (d1*c2*a3) + (c1*a2*d3)) - ((a3*d2*c1) + (d3*c2*a1) + (c3*a2*d1))) / detA;
   z = (((a1*b2*d3) + (b1*d2*a3) + (d1*a2*b3)) - ((a3*b2*d1) + (b3*d2*a1) + (d3*a2*b1))) / detA;
   document.getElementById("res_X").innerHTML="x="+x.toFixed(2);
   document.getElementById("res_Y").innerHTML="y="+y.toFixed(2);
   document.getElementById("res_Z").innerHTML="z="+z.toFixed(2);
   
}
