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
		
		case "Millimetres":switch(btnVal)
			{
				case "Millimetres":screen2.value=screen1.value;
					break;
				case "Centimetres":screen2.value=(screen1.value)/10;
					break;
				case "Metres":screen2.value=screen1.value/1000;
					break;
				case "Kilometres":screen2.value=screen1.value/1000000;
					break;
				case "Inches":screen2.value=0.0393700787*screen1.value;
					break;
				case "Feet":screen2.value=0.0032808399*screen1.value;
					break;
				case "Yards":screen2.value=0.0010936133*screen1.value;
					break;
				case "Miles":screen2.value=6.21371192*screen1.value/10000000;
					break;
				case "Nautical Miles":screen2.value=5.39956803*screen1.value/10000000;
					break;
				case "Mils":screen2.value=39.3700787402*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Centimetres":switch(btnVal)
			{
				case "Millimetres":screen2.value=10*screen1.value;
					break;
				case "Centimetres":screen2.value=screen1.value;
					break;
				case "Metres":screen2.value=screen1.value/100;
					break;
				case "Kilometres":screen2.value=screen1.value/100000;
					break;
				case "Inches":screen2.value=0.393700787*screen1.value;
					break;
				case "Feet":screen2.value=0.032808399*screen1.value;
					break;
				case "Yards":screen2.value=0.010936133*screen1.value;
					break;
				case "Miles":screen2.value=6.21371192*screen1.value/1000000;
					break;
				case "Nautical Miles":screen2.value=5.39956803*screen1.value/1000000;
					break;
				case "Mils":screen2.value=393.700787402*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Metres":switch(btnVal)
			{
				case "Millimetres":screen2.value=1000*screen1.value;
					break;
				case "Centimetres":screen2.value=100*screen1.value;
					break;
				case "Metres":screen2.value=screen1.value;
					break;
				case "Kilometres":screen2.value=screen1.value/1000;
					break;
				case "Inches":screen2.value=39.3700787402*screen1.value;
					break;
				case "Feet":screen2.value=3.280839895*screen1.value;
					break;
				case "Yards":screen2.value=1.0936132983*screen1.value;
					break;
				case "Miles":screen2.value=6.21371192*screen1.value/10000;
					break;
				case "Nautical Miles":screen2.value=5.39956803*screen1.value/10000;
					break;
				case "Mils":screen2.value=39370.078740157*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Kilometres":switch(btnVal)
			{
				case "Millimetres":screen2.value=1000000*screen1.value;
					break;
				case "Centimetres":screen2.value=100000*screen1.value;
					break;
				case "Metres":screen2.value=1000*screen1.value;
					break;
				case "Kilometres":screen2.value=screen1.value;
					break;
				case "Inches":screen2.value=39370.078740157*screen1.value;
					break;
				case "Feet":screen2.value=3280.8398950131*screen1.value;
					break;
				case "Yards":screen2.value=1093.6132983377*screen1.value;
					break;
				case "Miles":screen2.value=6.21371192*screen1.value/10;
					break;
				case "Nautical Miles":screen2.value=5.39956803*screen1.value/10;
					break;
				case "Mils":screen2.value=39370078.740157*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Inches":switch(btnVal)
			{
				case "Millimetres":screen2.value=25.4*screen1.value;
					break;
				case "Centimetres":screen2.value=2.54*screen1.value;
					break;
				case "Metres":screen2.value=0.0254*screen1.value;
					break;
				case "Kilometres":screen2.value=0.0000254*screen1.value;
					break;
				case "Inches":screen2.value=screen1.value;
					break;
				case "Feet":screen2.value=0.0833333333*screen1.value;
					break;
				case "Yards":screen2.value=0.0277777778*screen1.value;
					break;
				case "Miles":screen2.value=0.0000157828*screen1.value;
					break;
				case "Nautical Miles":screen2.value=0.0000137149*screen1.value;
					break;
				case "Mils":screen2.value=1000*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Feet":switch(btnVal)
			{
				case "Millimetres":screen2.value=304.8*screen1.value;
					break;
				case "Centimetres":screen2.value=30.48*screen1.value;
					break;
				case "Metres":screen2.value=0.3048*screen1.value;
					break;
				case "Kilometres":screen2.value=0.0003048*screen1.value;
					break;
				case "Inches":screen2.value=12*screen1.value;
					break;
				case "Feet":screen2.value=screen1.value;
					break;
				case "Yards":screen2.value=0.3333333333*screen1.value;
					break;
				case "Miles":screen2.value=0.0001893939*screen1.value;
					break;
				case "Nautical Miles":screen2.value=0.0001645788*screen1.value;
					break;
				case "Mils":screen2.value=12000*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Yards":switch(btnVal)
			{
				case "Millimetres":screen2.value=914.4*screen1.value;
					break;
				case "Centimetres":screen2.value=91.44*screen1.value;
					break;
				case "Metres":screen2.value=0.9144*screen1.value;
					break;
				case "Kilometres":screen2.value=0.0009144*screen1.value;
					break;
				case "Inches":screen2.value=36*screen1.value;
					break;
				case "Feet":screen2.value=3*screen1.value;
					break;
				case "Yards":screen2.value=screen1.value;
					break;
				case "Miles":screen2.value=0.0005681818*screen1.value;
					break;
				case "Nautical Miles":screen2.value=0.0004937365*screen1.value;
					break;
				case "Mils":screen2.value=36000*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Miles":switch(btnVal)
			{
				case "Millimetres":screen2.value=1609344*screen1.value;
					break;
				case "Centimetres":screen2.value=160934.4*screen1.value;
					break;
				case "Metres":screen2.value=1609.344*screen1.value;
					break;
				case "Kilometres":screen2.value=1.609344*screen1.value;
					break;
				case "Inches":screen2.value=63360*screen1.value;
					break;
				case "Feet":screen2.value=5280*screen1.value;
					break;
				case "Yards":screen2.value=1760*screen1.value;
					break;
				case "Miles":screen2.value=screen1.value;
					break;
				case "Nautical Miles":screen2.value=0.8689762419*screen1.value;
					break;
				case "Mils":screen2.value=63360000*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Nautical miles":switch(btnVal)
			{
				case "Millimetres":screen2.value=1852000*screen1.value;
					break;
				case "Centimetres":screen2.value=185200*screen1.value;
					break;
				case "Metres":screen2.value=1852*screen1.value;
					break;
				case "Kilometres":screen2.value=1.852*screen1.value;
					break;
				case "Inches":screen2.value=72913.385826772*screen1.value;
					break;
				case "Feet":screen2.value=6076.1154855643*screen1.value;
					break;
				case "Yards":screen2.value=2025.3718285214*screen1.value;
					break;
				case "Miles":screen2.value=1.150779448*screen1.value;
					break;
				case "Nautical Miles":screen2.value=screen1.value;
					break;
				case "Mils":screen2.value=72913385.826772*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Mils":switch(btnVal)
			{
				case "Millimetres":screen2.value=0.0254*screen1.value;
					break;
				case "Centimetres":screen2.value=0.00254*screen1.value;
					break;
				case "Metres":screen2.value=0.0000254*screen1.value;
					break;
				case "Kilometres":screen2.value=2.54000000*screen1.value/100000000;
					break;
				case "Inches":screen2.value=0.001*screen1.value;
					break;
				case "Feet":screen2.value=0.0000833333*screen1.value;
					break;
				case "Yards":screen2.value=0.0000277778*screen1.value;
					break;
				case "Miles":screen2.value=1.57828283*screen1.value/100000000;
					break;
				case "Nautical Miles":screen2.value=1.37149028*screen1.value/100000000;
					break;
				case "Mils":screen2.value=screen1.value;
					break;
				default:console.log("Wrong value");
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