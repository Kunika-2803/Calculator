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
		screen1.value="0";
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
		
		case "B":switch(btnVal)
			{
				case "B":screen2.value=screen1.value;
					break;
				case "KB":screen2.value=1024*(screen1.value);
					break;
				case "MB":screen2.value=(1024*1024)*screen1.value;
					break;
				case "GB":screen2.value=(1024*1024*1024)*screen1.value;
					break;
				case "TB":screen2.value=(1024*1024*1024*1024)*screen1.value;
					break;
				case "PB":screen2.value=(1024*1024*1024*1024*1024)*screen1.value;
					break;
				default:""
					break;
			}
			break;
		case "KB":switch(btnVal)
			{
				case "B":screen2.value=screen1.value/1024;
					break;
				case "KB":screen2.value=screen1.value;
					break;
				case "MB":screen2.value=(1024)*screen1.value;
					break;
				case "GB":screen2.value=(1024*1024)*screen1.value;
					break;
				case "TB":screen2.value=(1024*1024*1024)*screen1.value;
					break;
				case "PB":screen2.value=(1024*1024*1024*1024)*screen1.value;
					break;
				default:break;
			}
		case "MB":switch(btnVal)
			{
				case "B":screen2.value=screen1.value/(1024*1024);
					break;
				case "KB":screen2.value=screenValue/1024;
					break;
				case "MB":screen2.value=screen1.value;
					break;
				case "GB":screen2.value=(1024)*screen1.value;
					break;
				case "TB":screen2.value=(1024*1024)*screen1.value;
					break;
				case "PB":screen2.value=(1024*1024*1024)*screen1.value;
					break;
				default:break;
			}
			break;
		case "GB":switch(btnVal)
			{
				case "B":screen2.value=screen1.value/(1024*1024*1024);
					break;
				case "KB":screen2.value=screen1.value/(1024*1024);
					break;
				case "MB":screen2.value=screen1.value/1024;
					break;
				case "GB":screen2.value=screen1.value;
					break;
				case "TB":screen2.value=(1024)*screen1.value;
					break;
				case "PB":screen2.value=(1024*1024)*screen1.value;
					break;
				default:break;
			}
			break;
		case "TB":switch(btnVal)
			{
				case "B":screen2.value=screen1.value/(1024*1024*1024*1024);
					break;
				case "KB":screen2.value=screen1.value/(1024*1024*1024);
					break;
				case "MB":screen2.value=screen1.value/(1024*1024);
					break;
				case "GB":screen2.value=screen1.value/1024;
					break;
				case "TB":screen2.value=screen1.value;
					break;
				case "PB":screen2.value=(1024)*screen1.value;
					break;
				default:break;
			}
			break;
		case "PB":switch(btnVal)
			{
				case "B":screen2.value=screen1.value/(1024*1024*1024*1024*1024);
					break;
				case "KB":screen2.value=screen1.value/(1024*1024*1024*1024);
					break;
				case "MB":screen2.value=screen1.value/(1024*1024*1024);
					break;
				case "GB":screen2.value=screen1.value/(1024*1024);
					break;
				case "TB":screen2.value=screen1.value/1024;
					break;
				case "PB":screen2.value=screen1.value;
					break;
				default:break;
			}
			break;
		default:break;
}
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
button1.addEventListener('click',(e)=> {
  	toggle();
	clickedContent(button1);
});

button2.addEventListener('click',(e)=> {
  	toggle();
	clickedContent(button2);
});

function toggle()
{
	document.getElementById("myDropdown").classList.toggle("show");
}
function clickedContent(btnId){
buttons=document.querySelectorAll(".selector");
for(item of buttons)
{
	item.addEventListener('click',(e)=>{
		btnId.innerText=e.target.innerText;
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