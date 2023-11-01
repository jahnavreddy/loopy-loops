var driverName = "Kalvian-1";
var navigatorName = "Kalvian-2";
console.log("The driver's name is XXX" + driverName);
console.log("The navigator's name is YYY" + navigatorName);

if (driverName.length > navigatorName.length) {
  console.log("The driver has the longest name, it has " + driverName.length + " characters.");
} else if (navigatorName.length > driverName.length) {
  console.log("It seems that the navigator has the longest name, it has " + navigatorName.length + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + driverName.length + " characters!");
}

if (driverName.length > navigatorName.length) {
  console.log("The driver has the longest name, it has " + driverName.length + " characters.");
} else if (navigatorName.length > driverName.length) {
  console.log("It seems that the navigator has the longest name, it has " + navigatorName.length + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + driverName.length + " characters!");
}

function findVowels(name) {
  var vowels = "";
  var vowelIndices = "";
  for (var i = 0; i < name.length; i++) {
      if ("aeiouAEIOU".includes(name[i])) {
          vowels += name[i] + " ";
          vowelIndices += (i + 1) + " ";
      }
  }
  if (vowels === "") {
      console.log("No vowels in the name.");
  } else {
      console.log(name + " " + vowels + vowelIndices);
  }
}

findVowels(driverName);

function countCaseCharacters(name) {
  var uppercaseCount = 0;
  var lowercaseCount = 0;
  for (var i = 0; i < name.length; i++) {
      if (name[i] === name[i].toUpperCase()) {
          uppercaseCount++;
      } else if (name[i] === name[i].toLowerCase()) {
          lowercaseCount++;
      }
  }
  console.log("Uppercase characters: " + uppercaseCount);
  console.log("Lowercase characters: " + lowercaseCount);
}

countCaseCharacters(driverName);


function printDriverNameWithSpaces(name) {
  var spacedName = "";
  for (var i = 0; i < name.length; i++) {
      spacedName += name[i].toUpperCase() + " ";
  }
  console.log(spacedName.trim());
}

printDriverNameWithSpaces(driverName);

function printNavigatorNameInReverse(name) {
  var reversedName = "";
  for (var i = name.length - 1; i >= 0; i--) {
      reversedName += name[i];
  }
  console.log(reversedName);
}

printNavigatorNameInReverse(navigatorName);

var mergedNames = driverName + " " + navigatorName;
console.log(mergedNames);

var swappedNames = navigatorName + " " + driverName;
console.log(swappedNames);

if (driverName.localeCompare(navigatorName) < 0) {
  console.log("The driver's name goes first.");
} else if (driverName.localeCompare(navigatorName) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
