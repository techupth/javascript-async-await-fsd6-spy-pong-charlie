// Exercise #6
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

let getJohnOrders = async () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here

const asyncGetJohnProfileAndOrders = async () => {
  const data = {
    profile: null,
    orders: null,
  };
  try {
    data.profile = await getJohnProfile();
    console.log(data.profile);
    data.orders = await getJohnOrders();
    console.log(data.orders);
  } catch (error) {
    console.log(error);
  }
  // console.log(data);
  // return data;
};

// const johnData = asyncGetJohnProfileAndOrders();
// console.log(johnData);
asyncGetJohnProfileAndOrders();
