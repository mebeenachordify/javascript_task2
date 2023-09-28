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

