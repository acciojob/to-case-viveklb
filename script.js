function toCase(text) {
  // Handle empty string
  if (text === "") {
    return "-";
  }

  // Handle strings with spaces
  if (text.includes(" ")) {
    return text.toLowerCase() + "-" + text.toUpperCase();
  }

  return text.toLowerCase() + "-" + text.toUpperCase();
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));