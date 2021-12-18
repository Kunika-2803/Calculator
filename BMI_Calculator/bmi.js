button1=document.querySelector("#btn1");
button2=document.querySelector("#btn2");
screen1=document.getElementById("display1");
screen2=document.getElementById("display2");
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
button1.addEventListener('click',(e)=> {
  	document.getElementById("myDropdown").classList.toggle("show");
	select=document.querySelectorAll(".selector");
	for(item of select){
		item.addEventListener('click',(e)=>{
			valueBtn=document.getElementById("valueBtn");
			valueBtn.innerText=e.target.innerText;
		});
	}
	
});

button2.addEventListener('click',(e)=> {
  	document.getElementById("myDropdown2").classList.toggle("show");
	select=document.querySelectorAll(".selector1");
	for(item of select){
		item.addEventListener('click',(e)=>{
			valueBtn=document.getElementById("valueBtn2");
			valueBtn.innerText=e.target.innerText;
		});
	}
});

window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}

go=document.getElementById("go");

go.addEventListener('click',(e)=>{
	valueBtn=document.getElementById("valueBtn");
	valueBtn2=document.getElementById("valueBtn2");
	var value=0;
	switch(valueBtn.innerText)
	{
		
		case "Kilograms":switch(valueBtn2.innerText)
				{
					case "Centimeters":value=(screen1.value*10000)/(screen2.value*screen2.value);
								break;
					case "Meters":value=(screen1.value)/(screen2.value*screen2.value);
								break;
					case "feet":value=(screen1.value)/(screen2.value*screen2.value*0.3048*0.3048);
								break;
					case "Inches":value=(screen1.value*12*12)/(screen2.value*screen2.value*0.3048*0.3048);
								break;
					default:console.log("Wrong value");
								break;
				};
				break;
		case "Pounds":switch(valueBtn2.innerText)
				{
					case "Centimeters":value=(screen1.value*10000*2.20462262)/(screen2.value*screen2.value);
								break;
					case "Meters":value=(screen1.value*2.20462262)/(screen2.value*screen2.value);
								break;
					case "feet":value=(screen1.value*2.20462262)/(screen2.value*screen2.value*0.3048*0.3048);
								break;
					case "Inches":value=(screen1.value*12*12*2.20462262)/(screen2.value*screen2.value*0.3048*0.3048);
								break;
					default:console.log("Wrong value");
								break;
				};
				break;
				break;
		default:console.log(valueBtn);
				break;
	}
	if(value<18.5)
	{
		document.getElementById("result").innerText=value+" Underweight";
	}
	else if(value>=18.5&&value<=25)
	{
		document.getElementById("result").innerText=value+" Normal";
	}
	else
	{
		document.getElementById("result").innerText=value+" Overweight";
	}
	
});




buttons=document.querySelectorAll('input[type=button]');
for(item of buttons)
{
	item.addEventListener('click',(e)=>{
		console.log(e.target.value);
		/*disp2=document.getElementById("display2");
		if(e.target.value=="AC")
		{
			disp2.value="0";
		}
		else if(e.target.value=="<--")
		{
			let screenValue=disp2.value;
			disp2.value=screenValue.slice(0,-1);
		}
		else if(e.target.value!="GO")
		{
			disp2.value+=e.target.value;
		}*/
	});
}