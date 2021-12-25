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
		
		case "UK gallons":switch(btnVal)
			{
				case "UK gallons":screen2.value=screen1.value;
					break;
				case "US gallons":screen2.value=1.2009499255*screen1.value;
					break;
				case "Litres":screen2.value=4.54609*screen1.value;
					break;
				case "Millilitres":screen2.value=4546.09*screen1.value;
					break;
				case "Cubic centimetres":screen2.value=4546.09*screen1.value;
					break;
				case "Cubic metres":screen2.value=0.00454609*screen1.value;
					break;
				case "Cubic inches":screen2.value=277.4194327916*screen1.value;
					break;
				case "Cubic feet":screen2.value=0.1605436532*screen1.value/10000000;
					break;
				default:""
					break;
			}
			break;
		case "US gallons":switch(btnVal)
			{
				case "UK gallons":screen2.value=0.8326741846*screen1.value;
					break;
				case "US gallons":screen2.value=screen1.value;
					break;
				case "Litres":screen2.value=3.785411784*screen1.value;
					break;
				case "Millilitres":screen2.value=3785.411784*screen1.value;
					break;
				case "Cubic centimetres":screen2.value=3785.411784*screen1.value;
					break;
				case "Cubic metres":screen2.value=0.0037854118*screen1.value;
					break;
				case "Cubic inches":screen2.value=231*screen1.value;
					break;
				case "Cubic feet":screen2.value=0.1336805556*screen1.value/10000000;
					break;
				default:""
					break;
			}
			break;
		case "Litres":switch(btnVal)
			{
				case "UK gallons":screen2.value=0.2199692483*screen1.value;
					break;
				case "US gallons":screen2.value=0.2641720524*screen1.value;
					break;
				case "Litres":screen2.value=screen1.value;
					break;
				case "Millilitres":screen2.value=1000*screen1.value;
					break;
				case "Cubic centimetres":screen2.value=1000*screen1.value;
					break;
				case "Cubic metres":screen2.value=0.001*screen1.value;
					break;
				case "Cubic inches":screen2.value=61.0237440947*screen1.value;
					break;
				case "Cubic feet":screen2.value=0.0353146667*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Millilitres":switch(btnVal)
			{
				case "UK gallons":screen2.value=0.2199692483*screen1.value/1000;
					break;
				case "US gallons":screen2.value=0.2641720524*screen1.value/1000;
					break;
				case "Litres":screen2.value=screen1.value/1000;
					break;
				case "Millilitres":screen2.value=screen1.value;
					break;
				case "Cubic centimetres":screen2.value=screen1.value;
					break;
				case "Cubic metres":screen2.value=0.001*screen1.value/1000;
					break;
				case "Cubic inches":screen2.value=61.0237440947*screen1.value/1000;
					break;
				case "Cubic feet":screen2.value=0.0353146667*screen1.value/1000;
					break;
				default:""
					break;
			}
			break;
		case "Cubic centimetres":switch(btnVal)
			{
				case "UK gallons":screen2.value=0.2199692483*screen1.value/1000;
					break;
				case "US gallons":screen2.value=0.2641720524*screen1.value/1000;
					break;
				case "Litres":screen2.value=screen1.value/1000;
					break;
				case "Millilitres":screen2.value=screen1.value;
					break;
				case "Cubic centimetres":screen2.value=screen1.value;
					break;
				case "Cubic metres":screen2.value=0.001*screen1.value/1000;
					break;
				case "Cubic inches":screen2.value=61.0237440947*screen1.value/1000;
					break;
				case "Cubic feet":screen2.value=0.0353146667*screen1.value/1000;
					break;
				default:""
					break;
			}
			break;
		case "Cubic metres":switch(btnVal)
			{
				case "UK gallons":screen2.value=1000*0.2199692483*screen1.value;
					break;
				case "US gallons":screen2.value=1000*0.2641720524*screen1.value;
					break;
				case "Litres":screen2.value=1000*screen1.value;
					break;
				case "Millilitres":screen2.value=1000000*screen1.value;
					break;
				case "Cubic centimetres":screen2.value=1000000*screen1.value;
					break;
				case "Cubic metres":screen2.value=screen1.value;
					break;
				case "Cubic inches":screen2.value=1000*61.0237440947*screen1.value;
					break;
				case "Cubic feet":screen2.value=1000*0.0353146667*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Cubic inches":switch(btnVal)
			{
				case "UK gallons":screen2.value=0.8326741846*screen1.value/231;
					break;
				case "US gallons":screen2.value=screen1.value/231;
					break;
				case "Litres":screen2.value=3.785411784*screen1.value/231;
					break;
				case "Millilitres":screen2.value=3785.411784*screen1.value/231;
					break;
				case "Cubic centimetres":screen2.value=3785.411784*screen1.value/231;
					break;
				case "Cubic metres":screen2.value=0.0037854118*screen1.value/231;
					break;
				case "Cubic inches":screen2.value=screen1.value;
					break;
				case "Cubic feet":screen2.value=0.1336805556*screen1.value/23100000;
					break;
				default:""
					break;
			}
			break;
		case "Cubic feet":switch(btnVal)
			{
				case "UK gallons":screen2.value=6.228835459*screen1.value;
					break;
				case "US gallons":screen2.value=7.4805194805*screen1.value;
					break;
				case "Litres":screen2.value=28.316846592*screen1.value;
					break;
				case "Millilitres":screen2.value=28316.846592*screen1.value;
					break;
				case "Cubic centimetres":screen2.value=28316.846592*screen1.value;
					break;
				case "Cubic metres":screen2.value=0.0283168466*screen1.value;
					break;
				case "Cubic inches":screen2.value=1728*screen1.value;
					break;
				case "Cubic feet":screen2.value=screen1.value;
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