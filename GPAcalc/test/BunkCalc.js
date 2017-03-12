// JavaScript Document
var db=require('./db');
function getButtons(rid)
{

		rid=rid.substring(1,2);
		for(var i=1;i<7;i++)
		{
			for(var j=1;j<3;j++)
			{
				var b="b";
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
	 n1= n1+id.substring(1,2);
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
	if(miss===0)
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

function enterInDB(){
	var per401=document.getElementById('s1').value;
	var per402=document.getElementById('s2').value;
	var per403=document.getElementById('s3').value; ////Attendance_percentage
	var per404=document.getElementById('s4').value;
	var per405=document.getElementById('s5').value;
	var per406=document.getElementById('s6').value;

	var num12=document.getElementById('num12').value;
	var num22=document.getElementById('num22').value;
	var num32=document.getElementById('num32').value;////Total_lectures
	var num42=document.getElementById('num42').value;
	var num52=document.getElementById('num52').value;
	var num62=document.getElementById('num62').value;

	var num11=document.getElementById('num11').value;
	var num21=document.getElementById('num21').value;
	var num31=document.getElementById('num31').value;////lectures_attended
	var num41=document.getElementById('num41').value;
	var num51=document.getElementById('num51').value;
	var num61=document.getElementById('num61').value;

db.inputtoDB("update Attendance set Lectures_attended="+ num11 + ",Total_lectures=" + num12 + ",Attendance_percentage=" + per401 + " where Subject='ITS_401'");
db.inputtoDB("update Attendance set Lectures_attended=" + num21 + ",Total_lectures=" + num22 + ",Attendance_percentage=" + per402 + " where Subject='ITS_402'");
db.inputtoDB("update Attendance set Lectures_attended=" + num31 + ",Total_lectures=" + num32 + ",Attendance_percentage=" + per403 + " where Subject='ITS_403'");
db.inputtoDB("update Attendance set Lectures_attended=" + num41 + ",Total_lectures=" + num42 + ",Attendance_percentage=" + per404 + " where Subject='ITS_404'");
db.inputtoDB("update Attendance set Lectures_attended=" + num51 + ",Total_lectures=" + num52 + ",Attendance_percentage=" + per405 + " where Subject='ITS_405'");
db.inputtoDB("update Attendance set Lectures_attended=" + num61 + ",Total_lectures=" + num62 + ",Attendance_percentage=" + per406 + " where Subject='ITS_406'");

window.location.href = "./Home.html";
}

function enterFromDB(){
	document.getElementById('num11').value=db.retreiveSingleFromDB("select Lectures_attended from Attendance where Subject='ITS_401'");
	document.getElementById('num21').value=db.retreiveSingleFromDB("select Lectures_attended from Attendance where Subject='ITS_402'");
	document.getElementById('num31').value=db.retreiveSingleFromDB("select Lectures_attended from Attendance where Subject='ITS_403'");
	document.getElementById('num41').value=db.retreiveSingleFromDB("select Lectures_attended from Attendance where Subject='ITS_404'");
	document.getElementById('num51').value=db.retreiveSingleFromDB("select Lectures_attended from Attendance where Subject='ITS_405'");
	document.getElementById('num61').value=db.retreiveSingleFromDB("select Lectures_attended from Attendance where Subject='ITS_406'");

	document.getElementById('num12').value=db.retreiveSingleFromDB("select Total_lectures from Attendance where Subject='ITS_401'");
	document.getElementById('num22').value=db.retreiveSingleFromDB("select Total_lectures from Attendance where Subject='ITS_402'");
	document.getElementById('num32').value=db.retreiveSingleFromDB("select Total_lectures from Attendance where Subject='ITS_403'");
	document.getElementById('num42').value=db.retreiveSingleFromDB("select Total_lectures from Attendance where Subject='ITS_404'");
	document.getElementById('num52').value=db.retreiveSingleFromDB("select Total_lectures from Attendance where Subject='ITS_405'");
	document.getElementById('num62').value=db.retreiveSingleFromDB("select Total_lectures from Attendance where Subject='ITS_406'");

	document.getElementById('s1').value=db.retreiveSingleFromDB("select Attendance_percentage from Attendance where Subject='ITS_401'");
	document.getElementById('s2').value=db.retreiveSingleFromDB("select Attendance_percentage from Attendance where Subject='ITS_402'");
	document.getElementById('s3').value=db.retreiveSingleFromDB("select Attendance_percentage from Attendance where Subject='ITS_403'");
	document.getElementById('s4').value=db.retreiveSingleFromDB("select Attendance_percentage from Attendance where Subject='ITS_404'");
	document.getElementById('s5').value=db.retreiveSingleFromDB("select Attendance_percentage from Attendance where Subject='ITS_405'");
	document.getElementById('s6').value=db.retreiveSingleFromDB("select Attendance_percentage from Attendance where Subject='ITS_406'");
}
