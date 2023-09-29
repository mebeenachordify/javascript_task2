function printPyramid(height) {
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// Change the height to adjust the size of the pyramid
const pyramidHeight = 10;
printPyramid(pyramidHeight);


function printPyramid() {
    const heightInput = document.getElementById("height");
    const height = parseInt(heightInput.value);

    if (isNaN(height) || height < 1) {
        alert("Please enter a valid positive number for the height.");
        return;
    }

    const pyramidOutput = document.getElementById("pyramidOutput");
    pyramidOutput.textContent = ""; // Clear any previous output

    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(2 * i - 1);
        pyramidOutput.textContent += spaces + stars + "\n";
    }
}

