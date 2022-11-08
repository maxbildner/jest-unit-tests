# jest-unit-tests

in terminal, run `npm run test` to run all tests and see testing coverage

Docs:
<ins>**test(name, fn, timeout)**</ins>
https://devdocs.io/jest/api#testname-fn-timeout

<ins>**Testing Asynchronous Code**</ins>
https://devdocs.io/jest/asynchronous

<ins>**Increasing Time out value**</ins>
https://stackoverflow.com/questions/68811529/how-can-i-increase-the-test-time-out-value-in-jest

https://jestjs.io/docs/api#testname-fn-timeout

- NOTE\* defualt timeout on jest test() is 5 seconds
- To set a timeout on a single test, pass a third option to it/test, for example:

```
it('testing balabala', async () => {
...
}, 70000); // milliseconds
```

- How to run all tests in a single test file:
  `npm test -- sum.test.js`

  - the `--` means the end of options for npm, so everything after this is passed into the command being run (in this case, jest)

- How to run 1 test in a single test file:
  `npm test -- testFile.js -t "properly adds two numbers"`
