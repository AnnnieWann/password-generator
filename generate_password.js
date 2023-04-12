function getRandomPassword(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

//define function
function generatePassword(options) {
  // define materials that users need
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  //define a collection box
  let collection = [];

  // put materials to the collection box
  if (collection.length === 0) {
    return "There is no valid character in your selection.";
  }

  if (options.lowercase === "on") {
    collection = collection.concat(lowerCaseLetters.split(""));
  }

  if (options.uppercase === "on") {
    collection = collection.concat(upperCaseLetters.split(""));
  }

  if (options.numbers === "on") {
    collection = collection.concat(numbers.split(""));
  }

  if (options.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }

  // take out materials that user doesn't want
  if (options.excludeCharacters) {
    collection = collection.filter(
      (character) => !options.excludeCharacters.includes(character)
    );
  }

  // create random password
  let randomPassword = "";

  for (let i = 1; i <= options.length; i++) {
    randomPassword += getRandomPassword(collection);
  }

  // return to user
  return randomPassword;
}

module.exports = generatePassword;
