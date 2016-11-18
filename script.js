var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach";
var elephant = "Zielone Słonie";
var elephantUpperCased = elephant.toUpperCase();
console.log(elephantUpperCased);
var textAfter = text.replace("Papugi", elephant.toUpperCase());
console.log(textAfter);
console.log(textAfter.slice(0, 45));
