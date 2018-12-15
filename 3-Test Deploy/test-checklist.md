# Test/Deploy

> This checklist should contain most common cases when testing an application
> Deployment process should also be include

## Unit testing

To run `jest`, we need to follow these steps:

1. Install `babel-preset-env`. This will enable ES6 syntax in `.test.js` file
   ```sh
   npm install --save-dev babel-preset-env
   ```
2. Create a Babel config file `.babelrc`

   ```json
   {
     "presets": ["env"]
   }
   ```

3. Create test files at `/3-Test-Deploy/test/`

Files to be tested:

- [x] util.js

## Manual test

- [ ] Input keywords, should see correct result
- [ ] Result list should be cleared for new keyword
- [ ] Search box is focused on initial load

## Deploy

- I will not deploy this project. However, you can deploy this project using [`Now CLI`](https://zeit.co/docs/v1/getting-started/introduction-to-now).
