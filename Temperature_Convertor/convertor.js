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
	var screenVal=parseInt(screen1.value);
	switch(button1.innerText)
	{
		case "Celsius":switch(btnVal)
			{
				case "Celsius":screen2.value=screen1.value;
					break;
				case "Fahrenheit":screen2.value=(((screenVal)*9)/5)+32;
					break;
				case "Kelvin":screen2.value=screenVal+273.15;
					break;
				default:""
					break;
			}
			break;
		case "Fahrenheit":switch(btnVal)
			{
				case "Celsius":screen2.value=((screenVal-32)*5)/9;
					break;
				case "Fahrenheit":screen2.value=screen1.value;
					break;
				case "Kelvin":screen2.value=(((screenVal-32)*5)/9)+273.15;
					break;
				default:""
					break;
			}
			break;
		case "Kelvin":switch(btnVal)
			{
				case "Celsius":screen2.value=screenVal-273.15;
					break;
				case "Fahrenheit":screen2.value=(((screenVal-253.15)*9)/5)+32;
					break;
				case "Kelvin":screen2.value=screen1.value;
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