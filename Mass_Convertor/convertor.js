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
		
		case "Tons":switch(btnVal)
			{
				case "Tons":screen2.value=screen1.value;
					break;
				case "UK tons":screen2.value=screen1.value/1.0160469088;
					break;
				case "US tons":screen2.value=screen1.value/0.90718474;
					break;
				case "Pounds":screen2.value=2000*screen1.value/0.90718474;
					break;
				case "Ounces":screen2.value=32000*screen1.value/0.90718474;
					break;
				case "Kilogrammes":screen2.value=1000*screen1.value;
					break;
				case "Grams":screen2.value=1000000*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "UK tons":switch(btnVal)
			{
				case "Tons":screen2.value=1.0160469088*screen1.value;
					break;
				case "UK tons":screen2.value=screen1.value;
					break;
				case "US tons":screen2.value=1.12*screen1.value;
					break;
				case "Pounds":screen2.value=2240*screen1.value;
					break;
				case "Ounces":screen2.value=35840*screen1.value;
					break;
				case "Kilogrammes":screen2.value=1016.0469088*screen1.value;
					break;
				case "Grams":screen2.value=1016046.9088*screen1.value;
					break;
				default:""
					break;
			}
		case "US tons":switch(btnVal)
			{
				case "Tons":screen2.value=0.90718474*screen1.value;
					break;
				case "UK tons":screen2.value=screen1.value/1.12;
					break;
				case "US tons":screen2.value=screen1.value;
					break;
				case "Pounds":screen2.value=2000*screen1.value;
					break;
				case "Ounces":screen2.value=32000*screen1.value;
					break;
				case "Kilogrammes":screen2.value=907.18474*screen1.value;
					break;
				case "Grams":screen2.value=907184.74*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Pounds":switch(btnVal)
			{
				case "Tons":screen2.value=0.90718474*screen1.value/2000;
					break;
				case "UK tons":screen2.value=screen1.value/2240;
					break;
				case "US tons":screen2.value=screen1.value/2000;
					break;
				case "Pounds":screen2.value=screen1.value;
					break;
				case "Ounces":screen2.value=16*screen1.value;
					break;
				case "Kilogrammes":screen2.value=0.90718474*screen1.value/2;
					break;
				case "Grams":screen2.value=907.18474*screen1.value/2;
					break;
				default:console.log("Wrong Value");
					break;
			}
			break;
		case "Ounces":switch(btnVal)
			{
				case "Tons":screen2.value=screen1.value;
					break;
				case "UK tons":screen2.value=40.468564224*(screen1.value);
					break;
				case "US tons":screen2.value=(0.4046856422)*screen1.value;
					break;
				case "Pounds":screen2.value=(40468564.224)*screen1.value;
					break;
				case "Ounces":screen2.value=screen1.value;
					break;
				case "Kilogrammes":screen2.value=(6272640)*screen1.value;
					break;
				case "Grams":screen2.value=(4046.8564224)*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Kilogrammes":switch(btnVal)
			{
				case "Tons":screen2.value=screen1.value/1000;
					break;
				case "UK tons":screen2.value=screen1.value/1016.0469088;
					break;
				case "US tons":screen2.value=screen1.value/907.18474;
					break;
				case "Pounds":screen2.value=2*screen1.value/0.90718474;
					break;
				case "Ounces":screen2.value=32*screen1.value/0.90718474;
					break;
				case "Kilogrammes":screen2.value=screen1.value;
					break;
				case "Grams":screen2.value=1000*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Grams":switch(btnVal)
			{
				case "Tons":screen2.value=screen1.value/1000000;
					break;
				case "UK tons":screen2.value=screen1.value/1016046.9088;
					break;
				case "US tons":screen2.value=screen1.value/907184.74;
					break;
				case "Pounds":screen2.value=2*screen1.value/907.18474;
					break;
				case "Ounces":screen2.value=32*screen1.value/907.18474;
					break;
				case "Kilogrammes":screen2.value=screen1.value/1000;
					break;
				case "Grams":screen2.value=1000*screen1.value;
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