// ELEMENTS

let circle = document.getElementById("circleID");
let colorHexText = document.getElementById("colorHexText");
let colorString = document.getElementById("colorStringInput");
let colorPalletteInput = document.getElementById("colorPalletteInput");
let colorStringBTN = document.getElementById("colorStringBTN")
let shapeBtn = document.getElementById("shapeBtn");

//
document.getElementsByTagName("body")[0].style.backgroundColor = "#445"

// EVENT LISTENERS

colorStringBTN.addEventListener("click", (e) => {e.preventDefault(); colorStringInputHandler(colorString.value)})
shapeBtn.onclick = changeShape // && changeShapeButtonString;

//

// CHANGE COLOR BY INPUT FUNCTION

function colorStringInputHandler (str) {
  // str === "" ? alert("input empty")
  // : str === Number ? alert("not a string")
  // : str 
  let regex = /[a-z]/
  str.match(regex) && str != null && str != undefined && str != "" ? 
  console.log("input: ", str) :
  console.log("invalid input")
}

//

// RANDOM HEX FUNCTION

function randomHex() {
  let randomHex = Math.floor(Math.random() * 16777215).toString(16);
  circle.style.backgroundColor = `#${randomHex}`;
  colorHexText.innerHTML = `current hex-code: #${randomHex}`;
}

//

// SHAPE BUTTON FUNCTION

function changeShape() {
// circle.style.borderRadius wird zu empty string, wenn ich das objekt in eine variable einbette. wieso ?
// borderRadius ist beim ersten ausführen der funktion noch ein empty string, weil der computed style (also externes stylesheet) nicht geladen wurde 
  circle.style.borderRadius === '0px' || ""?
  circle.style.borderRadius = '50%':
  circle.style.borderRadius = '0px'
}

// CHANGE STRING INSIDE SHAPE BUTTON ? // OUTSTANDING ... //
