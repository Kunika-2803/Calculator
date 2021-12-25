screen1=document.querySelector("#display1");
let screen2=document.getElementById("display2");
button1=document.querySelector("#btn1");
button2=document.querySelector("#btn2");

screen1.addEventListener('keyup',(e)=>
{
	dataConvert(screen1.value);
});

buttons=document.querySelectorAll('input[type=button]');
for(item of buttons)
{
	item.addEventListener('click',(e)=>{
	var buttonText=e.target.value;
	if(buttonText=='AC')
	{
		screen1.value="1";
	}
	else if(buttonText=='<--')
	{
		let screenValue=screen1.value;
		screen1.value=screenValue.slice(0,-1);
	}
	else{
		screen1.value+=buttonText;
	}
	dataConvert(screen1.value);
})
}

function dataConvert(screenValue)
{
	var btnVal=button2.innerText;
	switch(button1.innerText)
	{
		
		case "Metres per second":switch(btnVal)
			{
				case "Metres per second":screen2.value=screen1.value;
					break;
				case "Metres per hour":screen2.value=3600*screen1.value;
					break;
				case "Kilometres per second":screen2.value=screen1.value/1000;
					break;
				case "Kilometres per hour":screen2.value=3.6*screen1.value;
					break;
				case "Inches per second":screen2.value=screen1.value/0.0254;
					break;
				case "Inches per hour":screen2.value=3600*screen1.value/0.0254;
					break;
				case "Feet per second":screen2.value=screen1.value/0.3048;
					break;
				case "Feet per hour":screen2.value=3600*screen1.value/0.3048;
					break;
				case "Miles per second":screen2.value=screen1.value/1609.344;
					break;
				case "Miles per hour":screen2.value=3600*screen1.value/1609.344;
					break;
				case "Knots":screen2.value=3600*screen1.value/1852;
					break;
				default:""
					break;
			}
			break;
		case "Metres per hour":switch(btnVal)
			{
				case "Metres per second":screen2.value=screen1.value/3600;
					break;
				case "Metres per hour":screen2.value=screen1.value;
					break;
				case "Kilometres per second":screen2.value=screen1.value/3600000;
					break;
				case "Kilometres per hour":screen2.value=screen1.value/1000;
					break;
				case "Inches per second":screen2.value=screen1.value/(0.0254*3600);
					break;
				case "Inches per hour":screen2.value=screen1.value/0.0254;
					break;
				case "Feet per second":screen2.value=screen1.value/(0.3048*3600);
					break;
				case "Feet per hour":screen2.value=screen1.value/0.3048;
					break;
				case "Miles per second":screen2.value=screen1.value/(1609.344*3600);
					break;
				case "Miles per hour":screen2.value=screen1.value/1609.344;
					break;
				case "Knots":screen2.value=screen1.value/1852;
					break;
				default:""
					break;
			}
			break;
		case "Kilometres per second":switch(btnVal)
			{
				case "Metres per second":screen2.value=1000*screen1.value;
					break;
				case "Metres per hour":screen2.value=3600000*screen1.value;
					break;
				case "Kilometres per second":screen2.value=screen1.value;
					break;
				case "Kilometres per hour":screen2.value=3600*screen1.value;
					break;
				case "Inches per second":screen2.value=1000*screen1.value/0.0254;
					break;
				case "Inches per hour":screen2.value=3600000*screen1.value/0.0254;
					break;
				case "Feet per second":screen2.value=1000*screen1.value/0.3048;
					break;
				case "Feet per hour":screen2.value=3600000*screen1.value/0.3048;
					break;
				case "Miles per second":screen2.value=1000*screen1.value/1609.344;
					break;
				case "Miles per hour":screen2.value=3600000*screen1.value/1609.344;
					break;
				case "Knots":screen2.value=3600000*screen1.value/1852;
					break;
				default:""
					break;
			}
			break;
		case "Kilometres per hour":switch(btnVal)
			{
				case "Metres per second":screen2.value=screen1.value/3.6;
					break;
				case "Metres per hour":screen2.value=1000*screen1.value;
					break;
				case "Kilometres per second":screen2.value=screen1.value/3600;
					break;
				case "Kilometres per hour":screen2.value=screen1.value;
					break;
				case "Inches per second":screen2.value=screen1.value/(0.0254*3.6);
					break;
				case "Inches per hour":screen2.value=1000*screen1.value/0.0254;
					break;
				case "Feet per second":screen2.value=screen1.value/(0.3048*3.6);
					break;
				case "Feet per hour":screen2.value=1000*screen1.value/0.3048;
					break;
				case "Miles per second":screen2.value=screen1.value/(1609.344*3.6);
					break;
				case "Miles per hour":screen2.value=1000*screen1.value/1609.344;
					break;
				case "Knots":screen2.value=1000*screen1.value/1852;
					break;
				default:""
					break;
			}
			break;
		case "Inches per second":switch(btnVal)
			{
				case "Metres per second":screen2.value=0.0254*screen1.value;
					break;
				case "Metres per hour":screen2.value=3600*0.0254*screen1.value;
					break;
				case "Kilometres per second":screen2.value=screen1.value/0.0000254;
					break;
				case "Kilometres per hour":screen2.value=3.6*0.0254*screen1.value;
					break;
				case "Inches per second":screen2.value=screen1.value;
					break;
				case "Inches per hour":screen2.value=3600*screen1.value;
					break;
				case "Feet per second":screen2.value=0.0254*screen1.value/0.3048;
					break;
				case "Feet per hour":screen2.value=3600*0.0254*screen1.value/0.3048;
					break;
				case "Miles per second":screen2.value=0.0254*screen1.value/1609.344;
					break;
				case "Miles per hour":screen2.value=3600*0.0254*screen1.value/1609.344;
					break;
				case "Knots":screen2.value=3600*0.0254*screen1.value/1852;
					break;
				default:""
					break;
			}
			break;
		case "Inches per hour":switch(btnVal)
			{
				case "Metres per second":screen2.value=0.0254*screen1.value/3600;
					break;
				case "Metres per hour":screen2.value=0.0254*screen1.value;
					break;
				case "Kilometres per second":screen2.value=screen1.value/(0.0000254*3600);
					break;
				case "Kilometres per hour":screen2.value=0.0254*screen1.value/1000;
					break;
				case "Inches per second":screen2.value=screen1.value/3600;
					break;
				case "Inches per hour":screen2.value=screen1.value;
					break;
				case "Feet per second":screen2.value=0.0254*screen1.value/(0.3048*3600);
					break;
				case "Feet per hour":screen2.value=0.0254*screen1.value/0.3048;
					break;
				case "Miles per second":screen2.value=0.0254*screen1.value/(1609.344*3600);
					break;
				case "Miles per hour":screen2.value=0.0254*screen1.value/1609.344;
					break;
				case "Knots":screen2.value=0.0254*screen1.value/1852;
					break;
				default:""
					break;
			}
			break;
		case "Feet per second":switch(btnVal)
			{
				case "Metres per second":screen2.value=0.3048*screen1.value;
					break;
				case "Metres per hour":screen2.value=0.3048*3600*screen1.value;
					break;
				case "Kilometres per second":screen2.value=0.3048*screen1.value/1000;
					break;
				case "Kilometres per hour":screen2.value=0.3048*3.6*screen1.value;
					break;
				case "Inches per second":screen2.value=0.3048*screen1.value/0.0254;
					break;
				case "Inches per hour":screen2.value=0.3048*3600*screen1.value/0.0254;
					break;
				case "Feet per second":screen2.value=screen1.value;
					break;
				case "Feet per hour":screen2.value=3600*screen1.value;
					break;
				case "Miles per second":screen2.value=0.3048*screen1.value/1609.344;
					break;
				case "Miles per hour":screen2.value=3600*0.3048*screen1.value/1609.344;
					break;
				case "Knots":screen2.value=0.3048*3600*screen1.value/1852;
					break;
				default:""
					break;
			}
			break;
		case "Feet per hour":switch(btnVal)
			{
				case "Metres per second":screen2.value=0.3048*screen1.value/3600;
					break;
				case "Metres per hour":screen2.value=0.3048*screen1.value;
					break;
				case "Kilometres per second":screen2.value=0.3048*screen1.value/3600000;
					break;
				case "Kilometres per hour":screen2.value=0.3048*screen1.value/1000;
					break;
				case "Inches per second":screen2.value=0.3048*screen1.value/(0.0254*3600);
					break;
				case "Inches per hour":screen2.value=0.3048*screen1.value/0.0254;
					break;
				case "Feet per second":screen2.value=screen1.value/3600;
					break;
				case "Feet per hour":screen2.value=screen1.value;
					break;
				case "Miles per second":screen2.value=0.3048*screen1.value/(1609.344*3600);
					break;
				case "Miles per hour":screen2.value=0.3048*screen1.value/1609.344;
					break;
				case "Knots":screen2.value=0.3048*screen1.value/1852;
					break;
				default:""
					break;
			}
			break;
		case "Miles per second":switch(btnVal)
			{
				case "Metres per second":screen2.value=1609.344*screen1.value;
					break;
				case "Metres per hour":screen2.value=1609.344*3600*screen1.value;
					break;
				case "Kilometres per second":screen2.value=1609.344*screen1.value/1000;
					break;
				case "Kilometres per hour":screen2.value=1609.344*3.6*screen1.value;
					break;
				case "Inches per second":screen2.value=1609.344*screen1.value/0.0254;
					break;
				case "Inches per hour":screen2.value=1609.344*3600*screen1.value/0.0254;
					break;
				case "Feet per second":screen2.value=1609.344*screen1.value/0.3048;
					break;
				case "Feet per hour":screen2.value=1609.344*3600*screen1.value/0.3048;
					break;
				case "Miles per second":screen2.value=screen1.value;
					break;
				case "Miles per hour":screen2.value=3600*screen1.value;
					break;
				case "Knots":screen2.value=1609.344*3600*screen1.value/1852;
					break;
				default:""
					break;
			}
			break;
		case "Miles per hour":switch(btnVal)
			{
				case "Metres per second":screen2.value=1609.344*screen1.value/3600;
					break;
				case "Metres per hour":screen2.value=1609.344*screen1.value;
					break;
				case "Kilometres per second":screen2.value=1609.344*screen1.value/3600000;
					break;
				case "Kilometres per hour":screen2.value=1609.344*screen1.value/1000;
					break;
				case "Inches per second":screen2.value=1609.344*screen1.value/(0.0254*3600);
					break;
				case "Inches per hour":screen2.value=1609.344*screen1.value/0.0254;
					break;
				case "Feet per second":screen2.value=1609.344*screen1.value/(0.3048*3600);
					break;
				case "Feet per hour":screen2.value=1609.344*screen1.value/0.3048;
					break;
				case "Miles per second":screen2.value=screen1.value/3600;
					break;
				case "Miles per hour":screen2.value=screen1.value;
					break;
				case "Knots":screen2.value=1609.344*screen1.value/1852;
					break;
				default:""
					break;
			}
			break;
		case "Knots":switch(btnVal)
			{
				case "Metres per second":screen2.value=1852*screen1.value/3600;
					break;
				case "Metres per hour":screen2.value=1852*screen1.value;
					break;
				case "Kilometres per second":screen2.value=1852*screen1.value/3600000;
					break;
				case "Kilometres per hour":screen2.value=1852*screen1.value/1000;
					break;
				case "Inches per second":screen2.value=1852*screen1.value/(0.0254*3600);
					break;
				case "Inches per hour":screen2.value=1852*screen1.value/0.0254;
					break;
				case "Feet per second":screen2.value=1852*screen1.value/(0.3048*3600);
					break;
				case "Feet per hour":screen2.value=1852*screen1.value/0.3048;
					break;
				case "Miles per second":screen2.value=1852*screen1.value/(1609.344*3600);
					break;
				case "Miles per hour":screen2.value=1852*screen1.value/1609.344;
					break;
				case "Knots":screen2.value=screen1.value;
					break;
				default:""
					break;
			}
			break;
		default:break;
}
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
button1.addEventListener('click',(e)=> {
  	toggle();
	clickedContent("btn1");
});

button2.addEventListener('click',(e)=> {
  	toggle();
	clickedContent("btn2");
});

function toggle()
{
	document.getElementById("myDropdown").classList.toggle("show");
}
function clickedContent(btnId){
buttons=document.querySelectorAll(".selector");
for(item of buttons)
{
	clickedbutton=document.getElementById(btnId);
	item.addEventListener('click',(e)=>{
		clickedbutton.innerText=e.target.innerText;
	});
}
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}