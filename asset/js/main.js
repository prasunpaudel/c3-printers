//to suffle the images in about section
function showContent(targetId) {
    var targetDiv = document.getElementById(targetId);

    if (targetDiv) {
        // Hide all card divs
        document.querySelectorAll('.card div').forEach(function (ele) {
            ele.classList.remove('active');
        });

        // Show the selected card div
        targetDiv.classList.add('active');
    }
}
//form validation in contact section
function validateForm(){
	var name= document.forms["contactForm"][""]["fullName"].value;
	var emailAddress= document.forms["contactForm"]["emailAddress"].value;
	var subject= document.forms["contactForm"]["subject"].value;
	var message= document.forms["contactForm"]["message"].value;
	if(name == ""  || emailAddress == "" || subject == "" || message ==""){//if the field is empty this message is alerted
		alert("Empty fields found. Please fill the form.");
	}
	else{
		alert("Thank you for your feedback.")//if any of the field is not empty this message is alerted
	}
	
}