//business logic
var vowels = ["a", "e", "i", "o", "u"];

function isVowel(char) {
  if (vowels.indexOf(char.toLowerCase()) === -1) {
    return false;
  }
  return true;
}

function startWithVowel(word) {
  var firstChar = word[0];
  return isVowel(firstChar);
}

function pigLatin(word) {
  if (startWithVowel(word)) {
    return word + "way";
  } else {
    var suffix = "";
    for (i in word) {
      if (!isVowel(word[i])) {
        suffix = suffix + word[i];
      } else if(word[i].toLowerCase())
    }
    return word;
  }
}

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedString = $("input#string").val();
    var result = pigLatin(inputtedString);

    $(".wordEnglish").text(inputtedString);
    $(".wordPigLatin").text(result);
  });
});
