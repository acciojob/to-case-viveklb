function toCase(text) {
  if (text === "") {
    return "-";
  }

  return text.toLowerCase() + "-" + text.toUpperCase();
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));