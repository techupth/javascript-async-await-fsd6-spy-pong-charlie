//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here

const resolve = (data) => {
  console.log(data)
}

const reject = (error) => {
  console.log(error)
}

getJohnProfile().then(resolve).catch(reject)

// console.log()
