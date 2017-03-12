// JavaScript Document
		var db = require('./db');
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
function getGPA(total)//function calculates GPA of particular subject
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
function getCGPA()//function that calculates CGPA using all subjects
{
	var sub1_gpa=parseInt(document.sub1.gpa.value);
	var sub2_gpa=parseInt(document.sub2.gpa.value);
	var sub3_gpa=parseInt(document.sub3.gpa.value);
	var sub4_gpa=parseInt(document.sub4.gpa.value);
	var sub5_gpa=parseInt(document.sub5.gpa.value);
	var sub6_gpa=parseInt(document.sub6.gpa.value);
	var cgpa=((sub1_gpa*3)+(sub2_gpa*3)+(sub3_gpa*3)+(sub4_gpa*3)+(sub5_gpa*3)+(sub6_gpa*3));
	//alert(cgpa);
	cgpa=cgpa/18;
    cgpa = cgpa.toFixed(2);
    if(cgpa<2.5)
        {document.getElementById('cgpdiv').style.backgroundColor="#E4252D";}
    else if(cgpa>2.5 && cgpa<3.33)
        {document.getElementById('cgpdiv').style.backgroundColor="#ffd000";}
    else if(cgpa>3.33)
        {document.getElementById('cgpdiv').style.backgroundColor="greenyellow";}
    
	document.getElementById('cgpa').innerHTML="<small>CGPA</small>"+cgpa;
	//document.getElementById('cgpdiv').style.display="block";
}
function enterInDB(){
	var upadatequery="";
var sub1=document.getElementById('sub1s').innerHTML;
var sub2=document.getElementById('sub2s').innerHTML;
var sub3=document.getElementById('sub3s').innerHTML;
var sub4=document.getElementById('sub4s').innerHTML;
var sub5=document.getElementById('sub5s').innerHTML;
var sub6=document.getElementById('sub6s').innerHTML;


var sub1c1=document.getElementById('sub1c1').value;
var sub1c2=document.getElementById('sub1c2').value;
var sub1es=document.getElementById('sub1es').value;
var sub1ts=document.getElementById('sub1ts').value;
var sub1gpa=document.getElementById('sub1gpa').value;


var sub2c1=document.getElementById('sub2c1').value;
var sub2c2=document.getElementById('sub2c2').value;
var sub2es=document.getElementById('sub2es').value;
var sub2ts=document.getElementById('sub2ts').value;
var sub2gpa=document.getElementById('sub2gpa').value;


var sub3c1=document.getElementById('sub3c1').value;
var sub3c2=document.getElementById('sub3c2').value;
var sub3es=document.getElementById('sub3es').value;
var sub3ts=document.getElementById('sub3ts').value;
var sub3gpa=document.getElementById('sub3gpa').value;


var sub4c1=document.getElementById('sub4c1').value;
var sub4c2=document.getElementById('sub4c2').value;
var sub4es=document.getElementById('sub4es').value;
var sub4ts=document.getElementById('sub4ts').value;
var sub4gpa=document.getElementById('sub4gpa').value;


var sub5c1=document.getElementById('sub5c1').value;
var sub5c2=document.getElementById('sub5c2').value;
var sub5es=document.getElementById('sub5es').value;
var sub5ts=document.getElementById('sub5ts').value;
var sub5gpa=document.getElementById('sub5gpa').value;

var sub6c1=document.getElementById('sub6c1').value;
var sub6c2=document.getElementById('sub6c2').value;
var sub6es=document.getElementById('sub6es').value;
var sub6ts=document.getElementById('sub6ts').value;
var sub6gpa=document.getElementById('sub6gpa').value;

upadatequery+="update GPAC set CIA1_Marks=" + sub1c1 + ", CIA2_Marks=" + sub1c2 + ", Endsem_Marks=" + sub1es + ", Total_Marks=" + sub1ts + ", GPA=" + sub1gpa + " where Subject='" + sub1 + "';";
upadatequery+="update GPAC set CIA1_Marks=" + sub2c1 + ", CIA2_Marks=" + sub2c2 + ", Endsem_Marks=" + sub2es + ", Total_Marks=" + sub2ts + ", GPA=" + sub2gpa + " where Subject='" + sub2 + "';";
upadatequery+="update GPAC set CIA1_Marks=" + sub3c1 + ", CIA2_Marks=" + sub3c2 + ", Endsem_Marks=" + sub3es + ", Total_Marks=" + sub3ts + ", GPA=" + sub3gpa + " where Subject='" + sub3 + "';";
upadatequery+="update GPAC set CIA1_Marks=" + sub4c1 + ", CIA2_Marks=" + sub4c2 + ", Endsem_Marks=" + sub4es + ", Total_Marks=" + sub4ts + ", GPA=" + sub4gpa + " where Subject='" + sub4 + "';";
upadatequery+="update GPAC set CIA1_Marks=" + sub5c1 + ", CIA2_Marks=" + sub5c2 + ", Endsem_Marks=" + sub5es + ", Total_Marks=" + sub5ts + ", GPA=" + sub5gpa + " where Subject='" + sub5 + "';";
upadatequery+="update GPAC set CIA1_Marks=" + sub6c1 + ", CIA2_Marks=" + sub6c2 + ", Endsem_Marks=" + sub6es + ", Total_Marks=" + sub6ts + ", GPA=" + sub6gpa + " where Subject='" + sub6 + "';";
db.inputtoDB(upadatequery);
window.location.href='index.html';
}

function enterFromDB(){

	document.getElementById('sub1c1').value=db.retreiveSingleFromDB("select CIA1_Marks from GPAC where Subject='"+ document.getElementById('sub1s').innerHTML +"';");
	document.getElementById('sub2c1').value=db.retreiveSingleFromDB("select CIA1_Marks from GPAC where Subject='"+ document.getElementById('sub2s').innerHTML +"';");
	document.getElementById('sub3c1').value=db.retreiveSingleFromDB("select CIA1_Marks from GPAC where Subject='"+ document.getElementById('sub3s').innerHTML +"';");

	document.getElementById('sub1c2').value=db.retreiveSingleFromDB("select CIA2_Marks from GPAC where Subject='"+ document.getElementById('sub1s').innerHTML +"';");
	document.getElementById('sub2c2').value=db.retreiveSingleFromDB("select CIA2_Marks from GPAC where Subject='"+ document.getElementById('sub2s').innerHTML +"';");
	document.getElementById('sub3c2').value=db.retreiveSingleFromDB("select CIA2_Marks from GPAC where Subject='"+ document.getElementById('sub3s').innerHTML +"';");

	document.getElementById('sub1es').value=db.retreiveSingleFromDB("select EndSem_Marks from GPAC where Subject='"+ document.getElementById('sub1s').innerHTML +"';");
	document.getElementById('sub2es').value=db.retreiveSingleFromDB("select EndSem_Marks from GPAC where Subject='"+ document.getElementById('sub2s').innerHTML +"';");
	document.getElementById('sub3es').value=db.retreiveSingleFromDB("select EndSem_Marks from GPAC where Subject='"+ document.getElementById('sub3s').innerHTML +"';");

//
	document.getElementById('sub1ts').value=db.retreiveSingleFromDB("select Total_Marks from GPAC where Subject='"+ document.getElementById('sub1s').innerHTML +"';");
	document.getElementById('sub2ts').value=db.retreiveSingleFromDB("select Total_Marks from GPAC where Subject='"+ document.getElementById('sub2s').innerHTML +"';");
	document.getElementById('sub3ts').value=db.retreiveSingleFromDB("select Total_Marks from GPAC where Subject='"+ document.getElementById('sub3s').innerHTML +"';");


	document.getElementById('sub1gpa').value=db.retreiveSingleFromDB("select GPA from GPAC where Subject='"+ document.getElementById('sub1s').innerHTML +"';");
	document.getElementById('sub2gpa').value=db.retreiveSingleFromDB("select GPA from GPAC where Subject='"+ document.getElementById('sub2s').innerHTML +"';");
	document.getElementById('sub3gpa').value=db.retreiveSingleFromDB("select GPA from GPAC where Subject='"+ document.getElementById('sub3s').innerHTML +"';");
//

	document.getElementById('sub4c1').value=db.retreiveSingleFromDB("select CIA1_Marks from GPAC where Subject='"+ document.getElementById('sub4s').innerHTML +"';");
	document.getElementById('sub5c1').value=db.retreiveSingleFromDB("select CIA1_Marks from GPAC where Subject='"+ document.getElementById('sub5s').innerHTML +"';");
	document.getElementById('sub6c1').value=db.retreiveSingleFromDB("select CIA1_Marks from GPAC where Subject='"+ document.getElementById('sub6s').innerHTML +"';");

	document.getElementById('sub4c2').value=db.retreiveSingleFromDB("select CIA2_Marks from GPAC where Subject='"+ document.getElementById('sub4s').innerHTML +"';");
	document.getElementById('sub5c2').value=db.retreiveSingleFromDB("select CIA2_Marks from GPAC where Subject='"+ document.getElementById('sub5s').innerHTML +"';");
	document.getElementById('sub6c2').value=db.retreiveSingleFromDB("select CIA2_Marks from GPAC where Subject='"+ document.getElementById('sub6s').innerHTML +"';");

	document.getElementById('sub4es').value=db.retreiveSingleFromDB("select EndSem_Marks from GPAC where Subject='"+ document.getElementById('sub4s').innerHTML +"';");
	document.getElementById('sub5es').value=db.retreiveSingleFromDB("select EndSem_Marks from GPAC where Subject='"+ document.getElementById('sub5s').innerHTML +"';");
	document.getElementById('sub6es').value=db.retreiveSingleFromDB("select EndSem_Marks from GPAC where Subject='"+ document.getElementById('sub6s').innerHTML +"';");
	//

	document.getElementById('sub4ts').value=db.retreiveSingleFromDB("select Total_Marks from GPAC where Subject='"+ document.getElementById('sub4s').innerHTML +"';");
	document.getElementById('sub5ts').value=db.retreiveSingleFromDB("select Total_Marks from GPAC where Subject='"+ document.getElementById('sub5s').innerHTML +"';");
	document.getElementById('sub6ts').value=db.retreiveSingleFromDB("select Total_Marks from GPAC where Subject='"+ document.getElementById('sub6s').innerHTML +"';");


	document.getElementById('sub4gpa').value=db.retreiveSingleFromDB("select GPA from GPAC where Subject='"+ document.getElementById('sub4s').innerHTML +"';");
	document.getElementById('sub5gpa').value=db.retreiveSingleFromDB("select GPA from GPAC where Subject='"+ document.getElementById('sub5s').innerHTML +"';");
	document.getElementById('sub6gpa').value=db.retreiveSingleFromDB("select GPA from GPAC where Subject='"+ document.getElementById('sub6s').innerHTML +"';");

}
