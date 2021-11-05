/**
 * 
 */

// VALIDATE FORM LOGIN
function validateLogin() {
	let email = document.forms["login"]["email"].value;
	let password = document.forms["login"]["password"].value;
	if (checkEmail(email) == false) {
		document.forms["login"]["email"].focus();
		return false;
	} else if (checkSize(password, 'Password', 6, 50) == false) {
		document.forms["login"]["password"].focus();
		return false;
	} else
		return true;
}

// VALIDATE FORM REGISTER
function validateRegister() {
	let username = document.forms["register"]["username"].value;
	let email = document.forms["register"]["email"].value;
	let password = document.forms["register"]["password"].value;
	let repass = document.forms["register"]["repass"].value;

	if (checkSize(username, 'User name', 6, 50) == false) {
		document.forms["register"]["username"].focus();
		return false;
	} else if (checkEmail(email) == false) {
		document.forms["register"]["email"].focus();
		return false;
	} else if (checkSize(password, 'Password', 6, 50) == false) {
		document.forms["register"]["password"].focus();
		return false;
	} else if (checkRepass(password, repass) == false) {
		document.forms["register"]["password"].value = '';
		document.forms["register"]["password"].focus();
		document.forms["register"]["repass"].value = '';
		return false;
	} else {
		return true;
	}
}

// VALIDATE FORM ADD CONTENT
function validateAddContent() {
	let title = document.forms["addContent"]["title"].value;
	let brief = document.forms["addContent"]["brief"].value;
	let content = document.forms["addContent"]["content"].value;

	if (checkSize(title, 'Title', 1, 200) == false) {
		document.forms["addContent"]["title"].focus();
		return false;
	} else if (checkSize(brief, 'Brief', 1, 1000) == false) {
		document.forms["addContent"]["brief"].focus();
		return false;
	} else if (checkSize(content, 'Content', 1, 1000) == false) {
		document.forms["addContent"]["content"].focus();
		return false;
	}

	return true;

}

// VALIDATE FORM PROFILE
function validateProfile() {
	let fname = document.forms["profile"]["fname"].value;
	let lname = document.forms["profile"]["lname"].value;
	let phone = document.forms["profile"]["phone"].value;
	if (checkSize(fname, 'First Name', 1, 50) == false) {
		 document.forms["profile"]["fname"].focus();
		return false;
	} else if (checkSize(lname, 'Last Name', 1, 50) == false) {
		 document.forms["profile"]["lname"].focus();
		return false;
	} else if (phone.length != 10) {
		alert("Phone length must be 10");
		document.forms["profile"]["phone"].focus();
		return false;
	} else {
		return true;
	}
}

// CHECK EMAIL
function checkEmail(email) {
	if (email == "") {
		alert("Email must be filled out");
		return false;
	} else if (email.length > 50) {
		alert("Email length must smaller than 50");
		return false;
	} else {
		const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var check = regex.test(String(email).toLowerCase());
		if (check == false) {
			alert("Email is incorrect format");
			return false;
		}
		return true;
	}
}

// CHECK SIZE OF 'type' BETWEEN MIN AND MAX
// 'mess' IS NAME OF 'type'
function checkSize(type, mess, min, max) {
	if (type == "") {
		alert(mess + " must be filled out");
		return false;
	} else if (type.length > max || type.length < min) {
		alert(mess + " length is between " + min + " and " + max);
		return false;
	} else
		return true;
}

// CHECK RE-PASSWORD
function checkRepass(pass, repass) {
	if (pass !== repass) {
		alert("Re password is not correct");
		return false;
	}
	return true;
}