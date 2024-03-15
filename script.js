function validateSyntax() {
  const input = document.getElementById("petInput").value;
  const resultMessage = document.getElementById("result"); // Placeholder for validation result

  // Check if input starts with 'pet_' followed by a year between 2000 and 2024, and then followed by alphanumeric characters for the pet name
  let result;
  if (/^pet_(20[0-1][0-9]|202[0-4])[A-Za-z]+$/.test(input)) {
    result ='Valid Syntax 🟢';
  } else {
    result ='Invalid Syntax 🔴';
  }

  resultMessage.innerHTML = result;
}
