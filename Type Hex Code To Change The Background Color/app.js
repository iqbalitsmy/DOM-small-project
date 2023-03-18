/**
 * project Requirements: 
 * - Change the background color by generating random rgb color by clicking a button
 * - Also display the hex code to a disable input field
 * - Add a button to copy the color
 * - Add a toast message when copied
 * - User can tyoe their own hex code too
 * - Show rgb color too, but do not need to edit it
 * user can also copy RGB
 */

// Global 
let div = null;

//Steps
//Step 1 - Create onload handler
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const output2 = document.getElementById('output2');
    const changeBtn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');
    const copyBtn2 = document.getElementById('copy-btn2');

    changeBtn.addEventListener('click', function () {
        const color = generateColorDecimal();
        let colorCode = generateHEXColor(color);
        let rgb = generateColorRGB(color);
        root.style.backgroundColor =  colorCode;
        output.value = colorCode.substring(1);
        output2.value = rgb;
    });

    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText("#"+output.value);
        if(div != null) {
            div.remove();
            div = null;
        }
        if(isHexaValid(output.value)) {
            genarateToastMessage("#"+output.value+" copied");
        } else {
            alert('Invalid Color code');
        }
    });

    copyBtn2.addEventListener('click', function () {
        
        if(div != null) {
            div.remove();
            div = null;
        }
        if(isHexaValid(output.value)) {
            genarateToastMessage("#"+output2.value+" copied");
            navigator.clipboard.writeText(output2.value);
        } else {
            alert('Invalid Color code');
        }
    });

    output.addEventListener('keyup', function (e) {
        const color = e.target.value;
        if(color) {
            output.value = color.toUpperCase();
            if(isHexaValid(color)) {
                root.style.backgroundColor = "#"+color;
                output2.value = hexToRgb(color);
            }
        }
    });
}

function generateColorDecimal(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return {
        red,
        green,
        blue,
    }
}

//Step 2 - random color generator function
function generateHEXColor({red, green, blue}) {
    // const {red, green, blue} = generateColorDecimal();

    const getTwoCode = (value) =>{
        const hex = value.toString(16);
        return hex.length === 1 ? "0"+hex : hex;
    }
    const randomColor = (getTwoCode(red)+""+getTwoCode(green)+""+getTwoCode(blue)).toUpperCase();

    return "#"+randomColor;
}

function generateColorRGB({red, green, blue}) {
    
    return "rgb("+red+","+green+","+blue+")";
}
/**
 * 
 * @param {string} hex 
 */
function hexToRgb(hex) {
    const red = parseInt(hex.slice(0,2), 16);
    const green = parseInt(hex.slice(2,4), 16);
    const blue = parseInt(hex.slice(4), 16);
    
    return "rgb("+red+","+green+","+blue+")";
}

hexToRgb('FFFFFF');

function genarateToastMessage(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';
    div.addEventListener('click', function () {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        div.addEventListener('animationend', function() {
            div.remove();
            div = null;
        });
    });

    document.body.appendChild(div);
}
/**
 * 
 * @param {string} color ;
 */
function isHexaValid(color) {
    if(color.length != 6)
        return false;

    return /^[0-9A-Fa-f]{6}$/i.test(color);
}

//Step 3 - collect all necessary references
//Step 4 - handle the change button click event
//Step 5 - handle the copy button click event
//Step 6 - active toast message
//Step 7 - Create a daynamic toast message
//Step 8 - clear toast message
//Step 9 - create isHexaValid function
//Step 10 - Implement change handler on input field
//Step 11 - prevent copying hex xode if it is not valid
//Step 12 - refactor the color generator function
//Step 13 - update color code to display rbg colors
//Step 14- Create hex to rgb function
//Step 15- update change handler
//Step 16- implement copy function