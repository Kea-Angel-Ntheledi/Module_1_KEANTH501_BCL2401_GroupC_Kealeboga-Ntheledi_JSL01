function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let result = ""; // Placeholder for validation result

  // Check if input starts with 'pet_' and followed by alphanumeric characters
  if (/^pet_[a-zA-Z0-9]+$/.test(input)) {
    result = "Valid Syntax";
  } else {
    result = "Invalid Syntax";
  }

  document.getElementById("result").innerText = result;
}
