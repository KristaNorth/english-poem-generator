function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e1676b45c78tcc0f65e93o16f7bcf3a0";
  let context =
    "You are an English language poem expert and love to write short poems. Your mission is to generate a four line poem using basic HTML and separate each line with a <br />. Please follow the instructions below and omit 'html' at beginning of the poem. Sign the poem with 'She Codes AI' inside a <strong> element at the bottom of the poem";
  let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating an English poem about $(instructionsInput.value)</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  // make a call to the API in axios
  axios.get(apiURL).then(displayPoem);
  // display the generated poem
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
