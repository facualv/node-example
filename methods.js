const fs = require("fs");

const getArrayOfFilesInDirectory = (dir) => {
  let files_ = [];
  files_ = fs.readdirSync(dir);
  return files_;
};

const printAllFilesInDirectory = (dir) => {
  let files_ = [];
  files_ = fs.readdirSync(dir);
  console.log("This is the printed list of all the files in the directory\n");
  files_.forEach((file) => {
    console.log(file);
  });
  console.log("\n");
};

const printInvertedArray = (dir) => {
  let files_ = [];
  files_ = fs.readdirSync(dir);
  const sortedArray = files_.sort();
  const invertedSortedArray = sortedArray.reverse();
  console.log("This the previous array but inverse sorted\n", invertedSortedArray);
};

const countFilesStartingWithLetter = (dir, letter) => {
  let counter = 0;
  let files_ = [];

  files_ = fs.readdirSync(dir);

  files_ = files_.filter((file) => {
    return file.startsWith(letter);
  });

  files_.forEach((file) => {
    counter++;
  });

  console.log(`\nThere are ${counter} files starting with letter ${letter} \n`, files_);
};

module.exports = {
  getArrayOfFilesInDirectory,
  printAllFilesInDirectory,
  printInvertedArray,
  countFilesStartingWithLetter
};
