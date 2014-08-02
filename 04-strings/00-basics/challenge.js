module.exports.formLetter = function formLetter(firstName, senderName, message) 
	{
		stringGreeting = "Hello ";
		stringClosing = "Sincerely,";
		var finalString = stringGreeting.concat(firstName);
		finalString += ",\n\n" + message;
		finalString += "\n\n" + stringClosing + "\n\n" + senderName;
      
    };

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {


};

module.exports.findFirstMatch = function(text, searchString) { 


};

module.exports.findLastMatch = function(text, searchString) {


};

module.exports.substringBetweenMatches = function(text, searchString) { 

};