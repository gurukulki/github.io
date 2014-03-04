if (addEventListener) 
	addEventListener("load",startup,false);
else 
	attachEvent("onload", startup);

function startup() {
	"use strict";       
	checkresponse();
	var b1 = document.getElementById("submit");
	if(b1) {
		b1.onclick = validateForm;
	}
	var sel = document.getElementById("seldevice");
	if(sel) {
		sel.onchange = populateData;
	}
}

function checkresponse() {
		var parameters = location.search.substring(1).split("&");
		var params = parameters[0].split("=");
		var value = unescape(params[1]);
		if(value == "true") {
			document.getElementById("response").style.display = "block";
		}
}

function validateForm()
{
	var arr = document.getElementsByTagName("select");
	var i;
	if(arr != null) {
		for (i = 0; i < arr.length; i++) {
			var val = arr[i].options[arr[i].selectedIndex].value;
			if(val==1)
			{
				alert("Please select the option from the dropdown!");
				return false; 
			}
		}
	}
	confirmEmail();
}

function confirmEmail() {
	if (document.getElementById("email") && document.getElementById("confirmemail")) {
		var email = document.getElementById("email").value
		var confemail = document.getElementById("confirmemail").value
		if(email != confemail) {
			alert("Emails do not match!");
			return false; 
		}
        }
}

function populateData() {
	    if((this.options[this.selectedIndex].value) == 2){
	    	    document.getElementById("name").value="Computer 1";
	    	    document.getElementById("desc").value="Computer of an employee id 1";
	    	    document.getElementById("devicetype").value= 1;
	    	    document.getElementById("porttype").value=1;
	    }
	    else if((this.options[this.selectedIndex].value) == 3){
	    	    document.getElementById("name").value="First floor Printer";
	    	    document.getElementById("desc").value="Printer used to print and scan";
	    	    document.getElementById("devicetype").value= 2;
	    	    document.getElementById("porttype").value=2;
	    }
	    	    else if((this.options[this.selectedIndex].value) == 4){
	    	    document.getElementById("name").value="Second floor router";
	    	    document.getElementById("desc").value="Router to connect the second floor devices";
	    	    document.getElementById("devicetype").value= 3;
	    	    document.getElementById("porttype").value=3;
	    }
	    	    else if((this.options[this.selectedIndex].value) == 5){
	    	    document.getElementById("name").value="Main switch";
	    	    document.getElementById("desc").value="To connect all the devices";
	    	    document.getElementById("devicetype").value= 2;
	    	    document.getElementById("porttype").value=3;
	    }
}