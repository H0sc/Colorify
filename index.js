// ELEMENTS

let circle = document.getElementById("circleID");
let colorString = document.getElementById("colorStringInput");
let colorPalletteInput = document.getElementById("colorPalletteInput");
let checkBTN = document.getElementById("checkBTN");
let randomHexBTN = document.getElementById("randomHexBTN");
let shapeBTN = document.getElementById("shapeBTN");
let colorStringInput = document.getElementById("colorStringInput");
let colorHexText = document.getElementById("colorHexText");
let colorRGBText = document.getElementById("colorRGBText");

// BG
document.getElementsByTagName("body")[0].style.backgroundColor = "#445";

// EVENT LISTENERS
checkBTN.addEventListener("click", (e) => {
  e.preventDefault();
  checkColorFormat(colorString.value);
});

colorPalletteInput.addEventListener("input", colorPalletteInputHandler);
randomHexBTN.addEventListener("click", randomHex);
shapeBTN.addEventListener("click", changeShape);

// HANDLE COLOR PALETTE INPUT
function colorPalletteInputHandler() {
  circle.style.backgroundColor = colorPalletteInput.value;
  colorHexText.innerHTML = `hex-code: ${colorPalletteInput.value}`;
  colorRGBText.innerHTML = `RGB value: ${circle.style.backgroundColor}`;
}

// RANDOM HEX FUNCTION
function randomHex() {
  let randomHex = Math.floor(Math.random() * 16777215).toString(16);
  circle.style.backgroundColor = `#${randomHex}`;
  colorHexText.innerHTML = `hex-code: #${randomHex}`;
  setHexAsBG(randomHex)
}

// SHAPE BUTTON FUNCTION
function changeShape() {
  // circle.style.borderRadius wird zu empty string, wenn ich das objekt in eine variable einbette. wieso ?
  // borderRadius ist beim ersten ausführen der funktion noch ein empty string, weil der computed style (also externes stylesheet) nicht geladen wurde
  circle.style.borderRadius === "0px" || ""
    ? (circle.style.borderRadius = "50%")
    : (circle.style.borderRadius = "0px");
}

function checkColorFormat(str) {
  const isName = /[a-zA-Z][^\d]/gi;
  isName.test(str)
    ? console.log("legaler namestring") && setColorNameAndRGB(str)
    : console.log("kein legaler string");

  const isHex = /([a-f]|\d){6}/i;
  if (isHex.test(str)) {
    console.log("legaler hex");
    setHexAsBG(str);
  } else {
    console.log("kein legaler hex, setHexColor wird nicht gerufen");
  }

  const hasThree = /[0-255]/gi;
  // hasThree.exec(str)? console.log("legaler rgb") && setRGBcolor(str) : console.log("kein legaler rgb");
}

function setColorNameAndRGB(name) {
  name = name.trim().toLowerCase();
  circle.style.backgroundColor = name.trim();
}

function setHexAsBG(hex) {
  console.log("setze hex als BG und Text");
  let txt = colorHexText.innerHTML
  hex = hex.trim()
  if (hex.includes("#")) {
    circle.style.backgroundColor = hex
    txt = `hexadecimal: ${hex}`
  } else {
    circle.style.backgroundColor = `#${hex}`
    txt = `hexadecimal: #${hex}`
  }
  // setHexAsBG(hex);
  // getRGBfromHexBG(hex)
}

// function setHexAsBG(hex) {
//   // deleteHash(hex)
//   // calcHexToRGB(hex)
//   circle.style.backgroundColor = hex
//   getRGBfromHexBG()
// }

// function getRGBfromHexBG(hex) {
//   // deleteHash(hex)
//   // calcHexToRGB(hex)
//   let hexBGColor = hex
//   // let extracted = hexBGColor.toString(10)
//   // colorRGBText.innerText = extracted
// }

// function deleteHash (hex) {
//   if (hex.includes("#")) {
//     const getDigits = /[^\#]/gi;  
//     let hex = hex.match(getDigits); 
//   }
// }

// let sepArr = []
// let replaceAtIndex = {
//   index: 0,
//   calcRes: 0,
// }

// function calcHexToRGB (hex) {
  // console.clear()
  // // mach array mit werten als items
  // for (x of hex) {
  //   sepArr.push(x)
  // }

  // sepArr.forEach((x,i) => {
  //   let prev = i > 0 ? sepArr[i - 1] : null
  //   // let next = i < sepArr.length ? sepArr[i + 1] : null
  //   let remainderOfIndex = (i%2)
  //   if (remainderOfIndex != 0) {
  //     console.log(i)
  //     sepArr.push()
  //   }
  //   console.log(sepArr)
  // })

  //   // jedes arrayitem, das keine zahl ist, also ein buchstabe, wird direkt an letterToDigit geschickt
  //   // jedes item in sepArray sind als string gespeichert. nutze isNaN(x). zahl: true, keine zahl: false
  //   if (isNaN(curr)) {
  //     console.log(curr, ": ist keine zahl")
  //     letterToDigit(curr, i)
  //     sepArr[replaceAtIndex.index] = replaceAtIndex.calcRes
  //     console.log("neues sepArray", sepArr)
  //   } else {
  //     console.log(curr, ": ist eine zahl !")
  //     curr = parseInt(curr, 10)
  //     console.log("geparster wert: ", curr)
  //     sepArr[i] = curr
  //     console.log("eingesetzt:", sepArr[i])
  //   }
  //   console.log("endergebnis array: ", sepArr)
  //   // sepArr.push(`${curr} + ${next}`)
  // })
  // sepArr = []
  // console.log(circle.style.backgroundColor.toString(10))
  // let num = 233
  // let hexNum = num.toString(16)
  // console.log("num", num)
  // console.log("hexnum to num", hexNum.toString(10))
  
// }

// soll den hex buchstaben in entsprechende zahl umwandeln
function letterToDigit(letter, index) {
    let hexDigitVals = {
    a: 10, 
    b: 11, 
    c: 12, 
    d: 13, 
    e: 14, 
    f: 15
  }
  for (const key in hexDigitVals) {
    // key ist jeder buchstabe, also key aus hexDigitVals
    if (key === letter) {
      console.log(letter ,"match", key)
      console.log("wert dazu", hexDigitVals[key])
      console.log("der index", index)
      replaceAtIndex.calcRes = hexDigitVals[key]
      replaceAtIndex.index = index
    }
  }
}


function setRGBcolor(rgb) {
  let colorsHex = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
  };

  let res;
  for (const key in colorsHex) {
    if (key === cName) {
      colorHexText.innerHTML = res;
    } else if ((res = undefined)) {
      res = console.log("couldnt find name");
      return res;
    }
  }
  return res;
}
