const fs = require("fs");
const path = require("path");

function checkFolderExists(folderName) {
  const folderPath = path.join(__dirname, folderName);
  return fs.existsSync(folderPath);
}

console.log(checkFolderExists("data.json"));
console.log(checkFolderExists("someFolder"));
