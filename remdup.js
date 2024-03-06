function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const inputArray = [1, 2, 3, 4, 5, 1, 6, 2, 7, 1, 3];
const uniqueArray = removeDuplicates(inputArray);
console.log("The output is :",uniqueArray);

document.getElementById("uniq").innerHTML = `
The output is : ${uniqueArray}`
