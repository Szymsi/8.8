var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach";
var elephant = "Zielone Słonie";
var elephantUpperCased = elephant.toUpperCase();
var textAfterSplit = text.split(" ");
var halfOfSentence= finalSentence.length/2;
var endOfTask = finalSentence.slice(0,halfOfSentence);
var finalSentence = textAfterSplit.join(" ");
textAfterSplit.splice(0, 1, elephantUpperCased);
console.log(endOfTask);
