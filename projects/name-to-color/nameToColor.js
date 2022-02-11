let r = 255;
let g = 255;
let b = 255;
let a = 1;
start(255, 255, 255,a);

/**
 * 
 * @param {Number} r RED
 * @param {Number} g GREEN
 * @param {Number} b BLUE
 * @param {Number} a Opacity
 */
function start(r, g, b,a) {
    this.r = r;
    this.g = g;
    this.b = b;
    document.getElementById("colorCodeRgb").value = `rgba(${r},${g},${b},${a})`;
    document.getElementById("colorCodeHex").value = `#${componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(Math.round(a * 255))}`;
    document.body.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
    // document.getElementById("headline").style = `text-shadow:2px 2px 2px rgba(${r},${g},${b},${a})`;
    document.getElementById("opacityText").value = `${a}`;
    document.getElementById("opacityRange").value = `${a}`;
}

/**
 * 
 * @param {Number} c 
 */
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

/**
 * 
 * @param {number} value 
 */
function updateOpacity(value) {
    start(this.r,this.g,this.b,value);
}

function copyRgb() {
    var copyTextRgb = document.getElementById("colorCodeRgb");
    copyTextRgb.select();
    copyTextRgb.setSelectionRange(0, 99999); 
    document.execCommand("copy");
  }

  function copyHex() {
    var copyTextHex = document.getElementById("colorCodeHex");
    copyTextHex.select();
    copyTextHex.setSelectionRange(0, 99999); 
    document.execCommand("copy");
  }




document.getElementById("submitButton").addEventListener("click", function () {
    try {

        let name = String(document.getElementById("name").value).split("").map(x => x.charCodeAt(0));
        let length = name.length;

        switch (length) {
            case 0:
                start(255, 255, 255,a);
                break;

            case 1:
                start(name[0], name[0], name[0],a);
                break;

            case 2:
                let rgb = name[0] + name[1] % 255;
                start(rgb, rgb, rgb,a);
                break;

            default:
                let onethird = length / 3;
                const reducer = (accumulator, currentValue) => accumulator + currentValue;

                start(name.slice(0, onethird).reduce(reducer) % 255, name.slice(onethird, 2 * onethird).reduce(reducer) % 255, name.slice(2 * onethird, length).reduce(reducer) % 255,a);


        }

    } catch (error) {

        alert(`Error! ${error} Not Posible try another name`);
    }

});

//  code explained


// //code in short and better
// //starts when button is clicked
// document.getElementById("button").addEventListener("click", function () {
//     //trys code else prints error using alert
//     try {
//         //get the value of name useing the id than splitting it in an array and mapping over it and changeing the chars to the unicode
//         let name = String(document.getElementById("name").value).split("").map(x => x.charCodeAt(0));
//         //get the length of the array 
//         let length = name.length;



//         // used if nothing is typed
//         if (length == 0) {

//             // sets the bg color to black // 0,0,0
//             document.body.style.backgroundColor = `rgb(0,0,0)`;
//             document.getElementById("colorCode").innerHTML = `your ColorCode is rgb(0,0,0)`;
//             return;
//         }

//         // used if only one letter is typed
//         if (length == 1) {
//             //sets the bg color to the single input
//             document.body.style.backgroundColor = `rgb(${name},${name},${name})`;
//             document.getElementById("colorCode").innerHTML = `your ColorCode is rgb(${name},${name},${name})`;
//             return;
//         }

//         // used if only two letter are typed
//         if (length == 2) {
//             //adds up both numbers 
//             let rgb = name[0] + name[1] % 255;
//             document.body.style.backgroundColor = `rgb(${rgb},${rgb},${rgb})`;
//             document.getElementById("colorCode").innerHTML = `your ColorCode is rgb(${rgb},${rgb},${rgb})`;
//             return;
//         }


//         //if the length is 3 or larger

//         //one third of the length 
//         let onethird = length / 3;

//         //slices the array in 3 parts using slice
//         let firstPart = name.slice(0, onethird);
//         let secondPart = name.slice(onethird, 2 * onethird);
//         let thirdPart = name.slice(2 * onethird, length);

//         //reducer
//         const reducer = (accumulator, currentValue) => accumulator + currentValue;

//         //get the color using reduce to reduce all numbers to one number and use modolo to get a number between 0 and 255  
//         let r = firstPart.reduce(reducer) % 255;
//         let g = secondPart.reduce(reducer) % 255;
//         let b = thirdPart.reduce(reducer) % 255;

//         // change bg color
//         document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
//         //prints the information on screen
//         document.getElementById("colorCode").innerHTML = `your ColorCode is rgb(${r},${g},${b})`;

//     } catch (error) {

//         alert("Not Posible try another name");

//     }
// });