/**
 * project Requirements: 
 * - Change the background color by generating random rgb color by clicking a button
 * - Also display the hex code to a disable input field
 * - Add a button to copy the color
 * - Add a toast message when copied
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
    const changeBtn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');

    changeBtn.addEventListener('click', function () {
        let colorCode = generateHEXColor()
        root.style.backgroundColor =  colorCode;
        output.value = colorCode;
    });

    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value);
        if(div != null) {
            div.remove();
            div = null;
        }
        genarateToastMessage(output.value+" copied");
    });
}
//Step 2 - random color generator function
function generateHEXColor() {
    const red = Math.floor(Math.random()*255);
    const gren = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return '#'+red.toString(16)+gren.toString(16)+blue.toString(16);
}

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

//Step 3 - collect all necessary references
//Step 4 - handle the change button click event
//Step 5 - handle the copy button click event
//Step 6 - active toast message
//Step 7 - Create a daynamic toast message
//Step 8 - clear toast message