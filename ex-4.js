// Exercise #4
let getJohnProfile = async () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
const asyncGetJohnProfile = async () => {
  try {
    const data = await getJohnProfile();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

asyncGetJohnProfile();
