function ElectricityBill(){
	let units= Number(document.getElementById('unit').value);
	
	if(units<60)
	{
	      if(units<30)
		  {
			document.getElementById("calculate").innerHTML=units*2.50+30;
		  }
		  else{
			document.getElementById("calculate").innerHTML=30*2.50+(units-30)*4.85+60;
		  }
	}
	else
	{
		if(units<90)
		{
			document.getElementById("calculate").innerHTML=60*7.85+(units-60)*10+90;
		}
		else if(units<120)
		{
			document.getElementById("calculate").innerHTML=60*7.85+(units-60)*10+(units-90)*27.75+480;
		}
		else{
			document.getElementById("calculate").innerHTML=60*7.85+(units-60)*10+(units-90)*27.75+(units-120)*32+480;
		}
	}
	
}







