// ELEMENTS

let circle = document.getElementById("circleID");
let colorHexText = document.getElementById("colorHexText");
let colorString = document.getElementById("colorStringInput");
let colorPalletteInput = document.getElementById("colorPalletteInput");
let colorStringBTN = document.getElementById("colorStringBTN");
let randomHexBTN = document.getElementById("randomHexBTN")
let shapeBtn = document.getElementById("shapeBtn");
let colorStringInput = document.getElementById("colorStringInput");

//

document.getElementsByTagName("body")[0].style.backgroundColor = "#445"

// EVENT LISTENERS

colorStringBTN.addEventListener("click", (e) => {e.preventDefault(); colorStringInputHandler(colorString.value)})
colorPalletteInput.addEventListener("input", () => {colorPalletteInputHandler()})
randomHexBTN.addEventListener("click", randomHex)
shapeBtn.onclick = changeShape

//

// CHANGE COLOR BY INPUT FUNCTION

function colorStringInputHandler (str) {
  // let falsy = [null, undefined, /"" || " "*/]
  // let bg = circle.style.backgroundColor;
  let regex = /[a-z]/

  str.match(regex) && str != null && str != undefined && str != "" ? 
  document.getElementById("circleID").style.backgroundColor = str :
  alert("invalid input");
  colorHexText.innerHTML = `As hex-code: not implemented yet`;
  document.getElementById("colorRGBText").innerHTML = `As RGB value: not implemented yet`
  document.getElementById("colorStringInput").value = ""
}

//

// HANDLE COLOR PALETTE INPUT

function colorPalletteInputHandler () {
  // console.log(colorPalletteInput.value)
  circle.style.backgroundColor = colorPalletteInput.value
  colorHexText.innerHTML = `As hex-code: ${colorPalletteInput.value}`;
  document.getElementById("colorRGBText").innerHTML = `As RGB value: ${circle.style.backgroundColor}`
}

//

// RANDOM HEX FUNCTION

function randomHex() {
  let randomHex = Math.floor(Math.random() * 16777215).toString(16);
  circle.style.backgroundColor = `#${randomHex}`;
  colorHexText.innerHTML = `As hex-code: #${randomHex}`;
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
