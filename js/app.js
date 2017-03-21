/*Start by prompting your user to enter a sentence. Then, store the sentence in a variable and print it to the console.*/

var sentence = prompt("Please enter a sentence");
console.log(sentence);

/*create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.*/

var capFirstLast = function(text){
	var firstLetter = text.charAt(0).toUpperCase();
  var lastLetter = text.charAt(text.length-1).toUpperCase();
  return firstLetter + lastLetter;
};

/*Create another function that will reverse the order of these two letters and return the result.*/

var reverse2Letters = function(twoLetters) {
	return twoLetters.charAt(1) + twoLetters.charAt(0);
};

/*Create a third function that calls the other two functions you've just created. For example, if I enter the sentence "I am a sentence", it should enter your first function (which should output "IE"), then call your second function, passing in the output value from the previous. It would return "EI" to me.*/

var capRevSen = function(text) {
	return text + reverse2Letters(capFirstLast(text));
};

/*Add code to your third function to concatenate the new two-letter string together with the original phrase. It should add the two-letter string at the end, forming the final result "I am a sentenceEI."*/

/*Create a fourth function to count the number of letters in the original sentence, divide it by two (rounding down if necessary), and output the letter at this index. Concatenate this letter at the beginning of the original sentence.*/

var indexLetterAddSen = function(text) {
var senIndex = Math.floor(text.length/2);
var indexLetter = text.charAt(senIndex);
return indexLetter + capRevSen(text);
};

alert(indexLetterAddSen(sentence));
