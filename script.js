const path_file= require('node:path');
const fs = require("fs");

//1.Write a function that logs the current file path and directory

function file() {
  console.log({ File: __filename, Dir: __dirname });
}
file();

//2. Write a function that takes a file path and returns its file name
// I will call fpath_file at the top 

function pathfile(pfile){
    return path_file.basename(pfile);   
}
console.log(pathfile('C://Users//menna//OneDrive//Desktop//Menna Mahmoud -C45 Mon&Thurs 10Am -assignment2-01223226429//script.js'))



//3. Write a function that builds a path from an object
function buildPath(obj) {
  return path_file.format(obj);
}
console.log(buildPath({ dir: "C:\\Users\\menna\\OneDrive\\Desktop\\Menna Mahmoud -C45 Mon&Thurs 10Am -assignment2-01223226429\\", name: "script", ext: ".js" }));
// your input and output
console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }).replace(/\\/g, "/"));



//4. Write a function that returns the file extension from a given file path.
function buildanotherPath(obj) {
  return path_file.format(obj);
}
console.log(buildanotherPath({ dir: "/docs/readme", ext: ".md"}).replace(/\\/g, "/"));

//5.Write a function that parses a given path and returns its name and ext
function parsePath(p) {
  return { Name: path_file.basename(p), Ext: path_file.extname(p) };
}
console.log(parsePath("/home/app/main.js"));


//6.Write a function that checks whether a given path is absolute
function isAbsolutePath(p) {
  return path_file.isAbsolute(p);
}
console.log(isAbsolutePath("/home/user/file.txt"));

//7.Write a function that joins multiple segments 
function joinPaths(...pathes) {
  return pathes.join('/');
}
console.log(joinPaths("src", "components", "App.js"));


//8.Write a function that resolves a relative path to an absolute one
function resolvePath(p) {
  return path_file.resolve(p);
}
console.log(resolvePath('script.js'))

//9.Write a function that joins two paths
function joinTwoPaths(p1, p2) {
  return path_file.join(p1, p2);
}
console.log(joinTwoPaths("/folder1", "folder2/file.txt").replace(/\\/g, "/"));
 
//10.Write a function that deletes a file asynchronously
// I will call fs at the top 
function deleteFile(filePath) {
  fs.unlink(filePath, () => {
    console.log("The file.txt is deleted.");
  });
}
deleteFile("/path/to/file.txt");

//11. Write a function that creates a folder synchronously
function createFolder(folderPath) {
  try {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    console.log("Success");
  } catch (err) {
    console.error("Error creating folder:", err);
  }
}
createFolder("./newFolder");

//12.Create an event emitter that listens for a "start" event and logs a welcome message
const EventEmitter = require("events");
const { log } = require('node:console');
const emitter = new EventEmitter();

function aaa() {
  emitter.on("start", () => {
    console.log("Welcome event triggered!");
  });

  emitter.emit("start"); 
}
aaa();


//13.Emit a custom "login" event with a username parameter
function loginUser(username) {
  emitter.on("login", (name) => {
    console.log(`User logged in: ${name}`);
  });

  emitter.emit("login", username);
}

loginUser("Ahmed");


//14.Read a file synchronously and log its contents
function readFileSyncLog(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}
readFileSyncLog("note.txt");



//15. Write asynchronously to a file
function writeFileAsync(path_file, content) {
  fs.writeFile(path_file, content, (err) => {
    if (err) {
      console.log("Error writing file:", err);
    } else {
      console.log("File saved successfully.");
    }
  });
}

writeFileAsync("note.txt", "Async save");


//16.Check if a directory exists
function checkIfExists(path) {
  return fs.existsSync(path);
}
console.log(checkIfExists("./note.txt"));

//17. Write a function that returns the OS platform and CPU architecture

const os = require("os");
function getSystemInfo() {
  return {
    Platform: os.platform(),
    Arch: os.arch()
  };
}
console.log(getSystemInfo());

