function generateName() { 
  const questions = [
    "Kaaliyah!",
    " my bestie Victor",
    "my bestie Donny",
    "my bestie Daniel",
    "my bestie Alfi",
    "my bestie Brett",
    " my bestie Rene!",
    " my bestie Uriel",
    "my bestie Rene",
    "my bestie Kadi",
    "My bestie Remsey"
  ];

  // Randomly select a question
  const index = Math.floor(Math.random() * questions.length);

  document.getElementById("displayName").innerHTML = "hi " + questions[index];
  // return questions[index];
}

// Example usage:
let thequestion = generateName();
