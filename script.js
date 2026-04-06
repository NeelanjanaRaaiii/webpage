const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "Yeahhhhhhhhhhh! I knew you would say yes Divyanshh!!";
  gif.src = "https://media.tenor.com/GoaZSTHxqgYAAAAj/milkandmocha-hug.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();

  // Define predefined romantic date ideas
  const dateIdeas = [
    "place to go: Olly – Olive’s All Day Café",
"place to go: ThreeSixtyOne° ",
"place to go: Kiyan (The Roseate)",
"place to go: Pastiche",
"place to go: Olive Bistro",
"place to go: Hamoni By The Greens",
"place to go: Kaffee Stories",
"place to go: The Forestta",
"place to go: AMPM Café",
"place to go: OMO Café",
    
  
  ];

  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's goo(click here)";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "400px"; // Adjust the width as needed

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`${selectedDateIdea}`);
  });

  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);




// const qs = (selector) => document.querySelector(selector);

// const question = qs(".question");
// const gif = qs(".gif");
// const yesBtn = qs(".yes-btn");
// const noBtn = qs(".no-btn");

// // YES CLICK
// const handleYesClick = () => {
//   question.innerHTML = "Yeahhhhhhhhhhh! I knew you would say yes Divyanshh! ";
//   gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

//   // Stop the no button from running away
//   noBtn.removeEventListener("mouseover", handleNoMouseOver);

//   // Remove the no button completely
//   noBtn.remove();

//   // Disable yes button and change text
//   yesBtn.disabled = true;
//   yesBtn.textContent = "See ya!";
// };

// // NO BUTTON RUNS AWAY
// const handleNoMouseOver = () => {
//   const { width, height } = noBtn.getBoundingClientRect();

//   const maxX = window.innerWidth - width;
//   const maxY = window.innerHeight - height;

//   noBtn.style.position = "absolute";
//   noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
//   noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
// };

// // EVENT LISTENERS
// yesBtn.addEventListener("click", handleYesClick);
// noBtn.addEventListener("mouseover", handleNoMouseOver);