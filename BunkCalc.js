// JavaScript Document
function getButtons(rid)
{
		
		rid=rid.substring(1,2);
		for(var i=1;i<7;i++)
		{
			for(var j=1;j<3;j++)
			{
				var b="b"
				b=b+i;
				b=b+j;
				document.getElementById(b).style.display='none';
			}
		}
		var b1="b"+rid+"1";
		var b2="b"+rid+"2";
		document.getElementById(b1).style.display='block';
		document.getElementById(b2).style.display='block';
}
function changeVal(id)
{
	var rno = id.substring(1,2);
	var button_type = parseInt(id.substring(2,3));
	var n1="num";
	n1=n1+rno;
	var n2=n1;
	n1=n1+1;
	n2=n2+2;
	var num1 = parseInt(document.getElementById(n1).value);
	var num2 = parseInt(document.getElementById(n2).value);
	if(button_type==1)
	{
		num1=num1+1;
		document.getElementById(n1).value=num1;
		getAttend(1,n1);		
	}
	if(button_type==2)
	{
		num2=num2+1;
		document.getElementById(n2).value=num2;
		callAttend(n2);
	}
}
function callAttend(id)
{
	var x = id.substring(0,4);
	x=x+1;
	getAttend(0,x);
}
function getAttend(z,id)
{
		var tid=id.substring(0,4);
		var n=id.substring(3,4);
		tid=tid+2;
		var a=parseInt(document.getElementById(id).value);
		var t=parseInt(document.getElementById(tid).value);
		var cid = 's';
		cid=cid+n;
		if(z==1)
		{
			t=t+1;	
			document.getElementById(tid).value=t;
		}
		//displays attendance
		if(isNaN(a+t)||t<a)
		{
			document.getElementById(tid).value=a;
			t=a;
		}
		if((a/t)>-1)
		{
			document.getElementById(cid).value=((a/t)*100);
		}
}
function calcBunk(id)
{
	var n1='num';
	var n1= n1+id.substring(1,2);
	var n2=n1;
	n1=n1+1;
	n2=n2+2;
	var a=parseInt(document.getElementById(n1).value);
	var t=parseInt(document.getElementById(n2).value);
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