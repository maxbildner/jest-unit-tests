async function fetchData(ticker) {
  return new Promise((resolve, reject) => {
    // simulate API call
    // - wait anywhere from 0-9 seconds before resolving promise
    setTimeout(
      // resolve({
      //   users: [{ name: "Michael" }, { name: "Sarah" }, { name: "Bill" }],
      // }),
      //=> { users: [ { name: 'Michael' }, { name: 'Sarah' }, { name: 'Bill' } ]

      // resolve({
      //   price: 138.9,
      // }),
      //=> { price: 138.9 }

      resolve(138.9),
      //=> 138.9
      Math.random() * 1000 // after random amount of time, resolve promise
    );
  });
}

// console.log(fetchData().then((data) => console.log(data)));
//=> 138.9

module.exports = fetchData;
