// JavaScript Document
		const db = require('./db');
function showGPA(form)
{
	var c1 = parseInt(form.cia1.value);// CIA1 Marks(from db)
	var c2 = parseInt(form.cia2.value);// CIA2 Marks(from db)
	var exam = parseInt(form.exam.value);// End Sem marks(from db)
	var flag=true;
	if(c1>20||c2>20||exam>60)//CIA marks have to be more than 20
	{
		flag=false;
		alert("Cannot exceed total marks");
	}
	var total = c1+c2+exam;//store in db
	if(!isNaN(c1+c2+exam)&&flag)
	{
		form.total.value=total;
		var gpa=getGPA(total);
		form.gpa.value=gpa;
	}
}
function getGPA(total)
{
	var gpa=0;
	if(total>=85)
	{
		gpa=4;
	}
	if(total<85&&total>=75)
	{
		gpa=3.67;
	}
	if(total<75&&total>=70)
	{
		gpa=3.33;
	}
	if(total<70&&total>=60)
	{
		gpa=3;
	}
	if(total<60&&total>=55)
	{
		gpa=2.67;
	}
	if(total<55&&total>=50)
	{
		gpa=2.33;
	}
	if(total<50&&total>=45)
	{
		gpa=2;
	}
	if(total>=40&&total<45)
	{
		gpa=1;
	}
	if(total<40)
	{
		gpa=0;
	}
	return gpa;
}
function getCGPA()
{
	var sub1_gpa=parseInt(document.sub1.gpa.value);
	var sub2_gpa=parseInt(document.sub2.gpa.value);
	var sub3_gpa=parseInt(document.sub3.gpa.value);
	var sub4_gpa=parseInt(document.sub4.gpa.value);
	var sub5_gpa=parseInt(document.sub5.gpa.value);
	var sub6_gpa=parseInt(document.sub6.gpa.value);
	var cgpa=((sub1_gpa*3)+(sub2_gpa*3)+(sub3_gpa*3)+(sub4_gpa*3)+(sub5_gpa*3)+(sub6_gpa*3));
	alert(cgpa);
	cgpa=cgpa/18;
	document.getElementById('cgpa').value=cgpa;
}
