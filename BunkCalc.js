// JavaScript Document

function getAttend()
{
		var a=parseInt(document.getElementById('num1').value);//no. of lectures attended
		var t=parseInt(document.getElementById('num2').value);//total no of lectures
		//displays attendance
		if(isNaN(a+t)||t<a)
		{
			document.getElementById('num2').value=a;
			t=a;
		}
		
		if((a/t)>-1)
		{
			document.getElementById('here').value=((a/t)*100);
		}
}
function calcBunk()
{
	
	var a=parseInt(document.getElementById('num1').value);//attended
	var t=parseInt(document.getElementById('num2').value);//total
	//when current attendance more than 75
	if((a*100/t)>75)
 	{
		showBunk(a,t);//call showBunk
	}
	//when current attendance exactly 75
	else if(((a*100)/t)==75)
	{
		alert("You have exactly 75% attendance");//display message
	}
	//when current attendance less than 75
	else
	{
		showAttend(a,t);//call showAttend
	}
}
function showBunk(a,t)
{
	//calculates number of lectures you can miss
	var miss = (((4*a)-(3*t))/3); 
	miss = round_down(miss);//remove decimal place and round down
	if(miss==0)
	{
		alert("You need to attend the next lecture");//display approporiate message
	}
	else
	{
		var message = "You can miss the next "+miss+" lectures and have 75%";//display appropriate message
		alert(message);
	}
}

function showAttend(a,t)
{
	//calculates number of lectures you have to attend
	var attend = ((3*t)-(4*a));
	var message = "You have to attend the next "+attend+" lectures to have 75%";//display appropriate message
	alert(message);
}

function round_down(n)
{
	//used to get rid of decimal point and get lower bound
	var temp=Math.floor(n);
	return temp;
}