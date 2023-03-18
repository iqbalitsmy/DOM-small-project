/**
 * project Requirements: 
 * - Change the background color by generating random rgb color by clicking a button
 */

//Steps
//Step 1 - Create onload handler
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function () {
        root.style.backgroundColor =  generateRGBColor();
    });
}
//Step 2 - random color generator function
function generateRGBColor() {
    const red = Math.floor(Math.random()*255);
    const gren = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return 'rgb('+red+','+gren+','+blue+')';
}

//Step 3 - collect all necessary references
//Step 4 - handle the click event
