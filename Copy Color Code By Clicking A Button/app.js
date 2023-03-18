/**
 * project Requirements: 
 * - Change the background color by generating random rgb color by clicking a button
 * - Also display the hex code to a disable input field
 * - Add a button to copy the color
 */

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
        root.style.backgroundColor =  generateHEXColor();
        output.value = generateHEXColor();
    });

    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value)
    });
}
//Step 2 - random color generator function
function generateHEXColor() {
    const red = Math.floor(Math.random()*255);
    const gren = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return '#'+red.toString(16)+gren.toString(16)+blue.toString(16);
}

//Step 3 - collect all necessary references
//Step 4 - handle the change button click event
//Step 5 - handle the copy button click event
