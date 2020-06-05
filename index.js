//requiring path and fs modules
const path = require("path");
const fs = require("fs");
const {
  getArrayOfFilesInDirectory,
  printAllFilesInDirectory,
  printInvertedArray,
  countFilesStartingWithLetter
} = require("./methods");

const directoryPath = path.join(__dirname, "files");

// 1 - Create a method to get an array with all the files inside a given path
const returnedArratFiles = getArrayOfFilesInDirectory(directoryPath);
console.log("\nThis an array of filenames in the directory\n", returnedArratFiles, "\n");

// 2 - Create a method to print all the files
printAllFilesInDirectory(directoryPath);

// 3 -Create a method to inverse sort and print the files of a given path
printInvertedArray(directoryPath);

// 4 - Create a method to get the amount of files starting with one letter
countFilesStartingWithLetter(directoryPath, "f");
