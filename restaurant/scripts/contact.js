function validateItems(){
	var name = document.forms["contact-form"]["name"].value;
	var email = document.forms["contact-form"]["email"].value;
	var phone = document.forms["contact-form"]["phone"].value;
	var choice1 = document.forms["contact-form"]["choice1"].checked;
	var choice2 = document.forms["contact-form"]["choice2"].checked;
	var m = document.forms["contact-form"]["m"].checked;
	var t = document.forms["contact-form"]["t"].checked;
	var w = document.forms["contact-form"]["w"].checked;
	var th = document.forms["contact-form"]["th"].checked;
	var f = document.forms["contact-form"]["f"].checked;
		
	if(name==="" || email==="" || phone==="" || (!choice1 && !choice2) || (!m && !t && !w && !th && !f)){
		alert("Please enter all the information asked for.");
		return false;
	}
	
	alert("Thank you for submitting the information. We have received your request.");
	
	return false;
}