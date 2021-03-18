
var mengeGesamt = 0;
var kcalGesamt  = 0;

function zutatEnter()
{
   if(document.getElementById("zutat").value === "Öl")
    {document.getElementById("kcal").value = 884;
     document.getElementById("menge").focus();}

   if(document.getElementById("zutat").value === "Reis")
    {document.getElementById("kcal").value = 120;
     document.getElementById("menge").focus();}

  
}

function addRow() 
{
    var table = document.getElementById("table");
    
    var row= document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    

    td1.innerHTML = document.getElementById("zutat").value;
    td2.innerHTML = document.getElementById("menge").value;
	mengeGesamt += Math.round(parseInt(document.getElementById("menge").value));
    td3.innerHTML = 
	Math.round((document.getElementById("kcal").value) 
	* (document.getElementById("menge").value / 100));
	
		kcalGesamt += Math.round(
		((parseInt(document.getElementById("kcal" ).value))
		*(parseInt(document.getElementById("menge").value)))
		/100);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    table.children[0].appendChild(row);

    document.getElementById("zutat").value = "";
    document.getElementById("menge").value = "";
    document.getElementById("kcal").value = "";
    document.getElementById("zutat").focus();

calc.call();

};



function calc()
{
	
	
//document.getElementById("mengeGesamt").innerHTML = mengeGesamt;
	//document.getElementById("kcalGesamt").innerHTML = kcalGesamt;

	document.getElementById("kcalPortion100").innerHTML
	= Math.round(kcalGesamt/mengeGesamt*100);
	document.getElementById("kcalPortion200").innerHTML
	= Math.round(kcalGesamt/mengeGesamt*200);
	document.getElementById("kcalPortion300").innerHTML
	= Math.round(kcalGesamt/mengeGesamt*300);
	document.getElementById("kcalPortion400").innerHTML
	= Math.round(kcalGesamt/mengeGesamt*400);
	document.getElementById("kcalPortion500").innerHTML
	= Math.round(kcalGesamt/mengeGesamt*500);
	document.getElementById("kcalPortion600").innerHTML
	= Math.round(kcalGesamt/mengeGesamt*600);
	document.getElementById("kcalPortion700").innerHTML
	= Math.round(kcalGesamt/mengeGesamt*700);
	document.getElementById("kcalPortion800").innerHTML
	= Math.round(kcalGesamt/mengeGesamt*800);
	document.getElementById("kcalPortion900").innerHTML
	= Math.round(kcalGesamt/mengeGesamt*900);
	document.getElementById("kcalPortion1000").innerHTML
	= Math.round(kcalGesamt/mengeGesamt*1000);
	
}