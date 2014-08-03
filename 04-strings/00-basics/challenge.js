module.exports.formLetter = function formLetter(firstName, senderName, message) {
	
	//this part is okay I think?? //
	var greeting = "Hello ";
	var firstName = "James.";
	var greetingStr = greeting + firstName;
	
	var message = "Things are well.";
	var messageStr = "\n\n" + message + "\n\n" 
	
	var closing = "Sincerely,";
	var senderName = "Christian";
	var endingStr = closing + "\n" + senderName;
	
	bodyStr += "\n\n" + messageStr + "\n\n";
	
	// to here //
	
	// this is the stuff that I was playing with //
	// bodyStr += "\n\n" + messageStr + "\n\n";
	

	// var greetingStr = helloStr.concat(firstName);
	// greetingStr;
	// helloStr; 
	
	// var greeting = "Hello, " + firstName;
	
	// greeting += ", James.";
	// greeting;
	
	// formLetter.concat(greetingStr, messageStr, endingStr); 
	
	// or var formLetter greetingStr.concat(messageStr, endingStr);
	
	// to here//
    };

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {


};

module.exports.findFirstMatch = function(text, searchString) { 


};

module.exports.findLastMatch = function(text, searchString) {


};

module.exports.substringBetweenMatches = function(text, searchString) { 

};