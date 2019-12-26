function selectClassFunction(){
	  var sel=document.getElementsByClassName("op");
	  var count=0;
	  for(var i=0;i<sel.length;i++){
		if(sel[i].selected)
		count++;
	}
	if(count==0){
	document.getElementById("errorClass").innerHTML="select any class";
	 return false;
	}
	else{
	document.getElementsById("errorClass").innerHTML="";
	return true;
	}
	}
function SubmitFunction(){
	    var elementR=document.getElementsByName("gender");
		var count=0;
	    for(var i=0;i<elementR.length;i++){
		if(elementR[i].checked)
		count++;
	}
	if(count==0){
	document.getElementById("errorGender").innerHTML="select gender";
	 return false;
	}
	else{
	document.getElementsById("errorGender").innerHTML="";
	return true;
	}
	}
	
function submitButtonFunction(){
	   
	   if(selectClassFunction() && SubmitFunction()){
	   return true;
	   }
	   else {
	     return false;
	   }
	}