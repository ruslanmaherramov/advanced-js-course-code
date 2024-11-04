function wait(duration) {
  const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("this is the resolved value!");
    }, duration);
  });
  return p;
}

// with async function
async function demo() {
  console.log("hi");
  const val = await wait(2000);
  console.log("there");
  console.log(val);
}

// with .then() method
wait(5000).then((val) => console.log(val));

///

function randomRejectResolve() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve("Pickles");
      } else {
        reject("Error!!!!!");
      }
    }, 2000);
  });
}

randomRejectResolve()
  .then((val) => {
    console.log("INSIDE first .then() callback ", val);
    return randomRejectResolve();
  })
  .then((val) => {
    console.log("INSIDE 2nd .then() callback ", val);
    return randomRejectResolve();
  })
  .then((val) => {
    console.log("INSIDE 3rd .then() callback ", val);
  })
  .catch((e) => console.log("INSIDE CATCH", e));
