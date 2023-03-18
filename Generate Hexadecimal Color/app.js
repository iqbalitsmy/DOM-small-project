/**
 * project Requirements: 
 * - Change the background color by generating random rgb color by clicking a button
 * - Also display the hex code to a disable input field
 * - Add a toast message when copied
 */

//Steps
//Step 1 - Create onload handler
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function () {
        root.style.backgroundColor =  generateHEXColor();
        output.value = generateHEXColor();
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
//Step 4 - handle the click event
//Step 5- Handle the copy button click event

