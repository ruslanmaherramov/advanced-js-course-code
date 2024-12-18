const fs = require("fs");

// Problem with callback hell

// fs.readFile("./assets/haiku1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERR!!", err);
//   } else {
//     console.log("HAIKU 1");
//     console.log(data);
//     fs.readFile("./assets/haiku2.txt", "utf8", (err, data) => {
//       if (err) {
//         console.log("ERR!!", err);
//       } else {
//         console.log("HAIKU 2");
//         console.log(data);
//         fs.readFile("./assets/haiku3.txt", "utf8", (err, data) => {
//           if (err) {
//             console.log("ERR!!", err);
//           } else {
//             console.log("HAIKU 3");
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

function asyncReadFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Using then() / catch() methods

// asyncReadFile("./assets/haiku1.txt")
//   .then((data) => {
//     console.log("HAIKU 1");
//     console.log(data);
//     return asyncReadFile("./assets/haiku2.txt");
//   })
//   .then((data) => {
//     console.log("HAIKU 2");
//     console.log(data);
//     return asyncReadFile("./assets/haiku3.txt");
//   })
//   .then((data) => {
//     console.log("HAIKU 3");
//     console.log(data);
//   })
//   .catch((err) => console.log("ERR", err));

// Using async / await

async function getHaikus() {
  try {
    const haiku1 = await asyncReadFile("./assets/haiku1.txt");
    console.log("HAIKU 1");
    console.log(haiku1);
    const haiku2 = await asyncReadFile("./assets/haiku2.txt");
    console.log("HAIKU 2");
    console.log(haiku2);
    const haiku3 = await asyncReadFile("./assets/haiku3.txt");
    console.log("HAIKU 3");
    console.log(haiku3);
  } catch (e) {
    console.log("ERR", e);
  }
}

getHaikus();
