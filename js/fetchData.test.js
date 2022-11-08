const { test, expect } = require("@jest/globals");
const fetchData = require("./fetchData");

// using async await to test asynchronous code
test("fetching the stock price of a ticker", async () => {
  const price = await fetchData("AAPL");
  expect(price).toBe(138.9);
}, 10000); // increase timeout from default 5 seconds to 10 seconds incase it takes longer to retrieve data

// - NOTE* defualt timeout on jest test() is 5 seconds
