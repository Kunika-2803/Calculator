let screen=document.getElementById('display');
buttons=document.querySelectorAll('input[type=button]');
for(item of buttons){
	item.addEventListener('click',(e)=>{
		var buttonText=e.target.value;
		console.log(buttonText);
		if(buttonText=='AC' || buttonText=='C')
		{
			screen.value="";
		}
		else if(buttonText=='<--')
		{
			let screenValue=screen.value;
			screen.value=screenValue.slice(0,-1);
		}
		else if(buttonText=='cos'){
			screen.value = Math.cos(screen.value);
		}
		else if(buttonText=='sin') {
			screen.value = Math.sin(screen.value);
		}
		else if(buttonText=='tan') {
			screen.value = Math.tan(screen.value);
		}
		else if(e.target.id=="sqrt") {
			screen.value = Math.sqrt(screen.value);
		}
		else if(buttonText=='ln') {
			screen.value = Math.log(screen.value);
		}
		else if(e.target.id=="exp") {
			screen.value = Math.exp(screen.value);
		}
		else if(e.target.id=='pi')
		{
			screen.value += Math.PI;
		}
		else if(e.target.id=="mul2")
		{
			screen.value+='*2';
		}
		else if(e.target.id=="sign")
		{
			if(screen.value.substring(0, 1) == "-")
			screen.value = screen.value.substring(1, screen.value.length)
			else
			screen.value = "-" + screen.value
		}
		else if(buttonText=='%'){
			try{
			let screenValue=eval(screen.value);
			if(!screen.value)
			{
				screen.value="";
			}
			else
			{
				screen.value=(screenValue)/100;
			}
			}
			catch(error)
			{
				screen.value="Incorrect value";
			}
		}
		else if(buttonText=='Sc')
		{
			screenValue=screen.value;
			window.location='Scientific_Calculator.jsp';
			screen.value=screenValue;
		}
		else if(buttonText=='=')
		{
			
			try{
			let screenValue=eval(screen.value);
			
			if(!screen.value)
			{
				screen.value="";
			}
			else
			{
				screen.value=screenValue;
			}
			}
			catch(error)
			{
				screen.value="Incorrect value";
			}
		}
		else{
			screen.value += buttonText;
		}
		


		/*if(buttonText=='AC')
		{
			screen.value="";
		}
		else if(buttonText=='<--')
		{
			let screenValue=screen.value;
			screen.value=screenValue.slice(0,-1);
		}
		else if(buttonText=='=')
		{
			
			try{
			let screenValue=eval(screen.value);
			
			if(!screen.value)
			{
				screen.value="";
			}
			else
			{
				screen.value=screenValue;
			}
			}
			catch(error)
			{
				screen.value="Incorrect value";
			}
		}
		else
		{
			screen.value+=buttonText;
		}*/
	});
}
