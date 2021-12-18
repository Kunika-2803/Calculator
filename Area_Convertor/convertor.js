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
		
		case "Acres":switch(btnVal)
			{
				case "Acres":screen2.value=screen1.value;
					break;
				case "Ares":screen2.value=40.468564224*(screen1.value);
					break;
				case "Hectares":screen2.value=(0.4046856422)*screen1.value;
					break;
				case "Square centimetres":screen2.value=(40468564.224)*screen1.value;
					break;
				case "Square feet":screen2.value=(43560)*screen1.value;
					break;
				case "Square inches":screen2.value=(6272640)*screen1.value;
					break;
				case "Square metres":screen2.value=(4046.8564224)*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Ares":switch(btnVal)
			{
				case "Acres":screen2.value=(0.0247105381)*screen1.value;
					break;
				case "Ares":screen2.value=screen1.value;
					break;
				case "Hectares":screen2.value=(0.01)*screen1.value;
					break;
				case "Square centimetres":screen2.value=(1000000)*screen1.value;
					break;
				case "Square feet":screen2.value=(1076.391041671)*screen1.value;
					break;
				case "Square inches":screen2.value=(155000.31000062)*screen1.value;
					break;
				case "Square metres":screen2.value=(100)*screen1.value;
					break;
				default:""
					break;
			}
		case "Hectares":switch(btnVal)
			{
				case "Acres":screen2.value=(2.4710538147)*screen1.value;
					break;
				case "Ares":screen2.value=100*screen1.value;
					break;
				case "Hectares":screen2.value=screen1.value;
					break;
				case "Square centimetres":screen2.value=(100000000)*screen1.value;
					break;
				case "Square feet":screen2.value=(107639.1041671)*screen1.value;
					break;
				case "Square inches":screen2.value=(15500031.000062)*screen1.value;
					break;
				case "Square metres":screen2.value=(10000)*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Square centimetres":switch(btnVal)
			{
				case "Acres":screen2.value=(2.4710538147)*screen1.value/100000000;
					break;
				case "Ares":screen2.value=screen1.value/1000000;
					break;
				case "Hectares":screen2.value=screen1.value/100000000;
					break;
				case "Square centimetres":screen2.value=screen1.value;
					break;
				case "Square feet":screen2.value=(0.1076391041671)*screen1.value/100;
					break;
				case "Square inches":screen2.value=(0.15500031000062)*screen1.value;
					break;
				case "Square metres":screen2.value=screen1.value/10000;
					break;
				default:""
					break;
			}
			break;
		case "Square feet":switch(btnVal)
			{
				case "Acres":screen2.value=(0.0000229568)*screen1.value/100000000;
					break;
				case "Ares":screen2.value=(0.0009290304)*screen1.value;
					break;
				case "Hectares":screen2.value=0.0000092903*screen1.value;
					break;
				case "Square centimetres":screen2.value=929.0304*screen1.value;
					break;
				case "Square feet":screen2.value=screen1.value;
					break;
				case "Square inches":screen2.value=144*screen1.value;
					break;
				case "Square metres":screen2.value=0.09290304*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Square inches":switch(btnVal)
			{
				case "Acres":screen2.value=(1.59422508)*screen1.value/10000000;
					break;
				case "Ares":screen2.value=(0.0000064516)*screen1.value;
					break;
				case "Hectares":screen2.value=6.45160000*screen1.value/100000000;
					break;
				case "Square centimetres":screen2.value=6.4516*screen1.value;
					break;
				case "Square feet":screen2.value=0.0069444444*screen1.value;
					break;
				case "Square inches":screen2.value=screen1.value;
					break;
				case "Square metres":screen2.value=0.00064516*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "Square metres":switch(btnVal)
			{
				case "Acres":screen2.value=(0.0002471054)*screen1.value;
					break;
				case "Ares":screen2.value=(0.01)*screen1.value;
					break;
				case "Hectares":screen2.value=0.00001*screen1.value;
					break;
				case "Square centimetres":screen2.value=10000*screen1.value;
					break;
				case "Square feet":screen2.value=10.7639104167*screen1.value;
					break;
				case "Square inches":screen2.value=1550.0031000062*screen1.value;
					break;
				case "Square metres":screen2.value=screen1.value;
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