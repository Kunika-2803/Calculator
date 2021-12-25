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
		
		case "Milliseconds":switch(btnVal)
			{
				case "Milliseconds":screen2.value=screen1.value;
					break;
				case "Seconds":screen2.value=screen1.value/1000;
					break;
				case "Minutes":screen2.value=screen1.value/60000;
					break;
				case "Hours":screen2.value=screen1.value/3600000;
					break;
				case "Days":screen2.value=screen1.value/86400000;
					break;
				case "Week":screen2.value=screen1.value/604800000;
					break;
				default:""
					break;
			}
			break;
		case "Seconds":switch(btnVal)
			{
				case "Milliseconds":screen2.value=1000*screen1.value;
					break;
				case "Seconds":screen2.value=screen1.value;
					break;
				case "Minutes":screen2.value=screen1.value/60;
					break;
				case "Hours":screen2.value=screen1.value/3600;
					break;
				case "Days":screen2.value=screen1.value/86400;
					break;
				case "Week":screen2.value=screen1.value/604800;
					break;
				default:""
					break;
			}
			break;
		case "Minutes":switch(btnVal)
			{
				case "Milliseconds":screen2.value=60000*screen1.value;
					break;
				case "Seconds":screen2.value=60*screen1.value;
					break;
				case "Minutes":screen2.value=screen1.value;
					break;
				case "Hours":screen2.value=screen1.value/60;
					break;
				case "Days":screen2.value=screen1.value/1440;
					break;
				case "Week":screen2.value=screen1.value/10080;
					break;
				default:""
					break;
			}
			break;
		case "Hours":switch(btnVal)
			{
				case "Milliseconds":screen2.value=3600000*screen1.value;
					break;
				case "Seconds":screen2.value=3600*screen1.value;
					break;
				case "Minutes":screen2.value=60*screen1.value;
					break;
				case "Hours":screen2.value=screen1.value;
					break;
				case "Days":screen2.value=screen1.value/24;
					break;
				case "Week":screen2.value=screen1.value/168;
					break;
				default:""
					break;
			}
			break;
		case "Days":switch(btnVal)
			{
				case "Milliseconds":screen2.value=86400000*screen1.value;
					break;
				case "Seconds":screen2.value=86400*screen1.value;
					break;
				case "Minutes":screen2.value=1440*screen1.value;
					break;
				case "Hours":screen2.value=24*screen1.value;
					break;
				case "Days":screen2.value=screen1.value;
					break;
				case "Week":screen2.value=screen1.value/7;
					break;
				default:""
					break;
			}
			break;
		case "Week":switch(btnVal)
			{
				case "Milliseconds":screen2.value=604800000*screen1.value;
					break;
				case "Seconds":screen2.value=604800*screen1.value;
					break;
				case "Minutes":screen2.value=10080*screen1.value;
					break;
				case "Hours":screen2.value=168*screen1.value;
					break;
				case "Days":screen2.value=7*screen1.value;
					break;
				case "Week":screen2.value=screen1.value;
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