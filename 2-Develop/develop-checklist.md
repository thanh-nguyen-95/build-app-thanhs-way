# Develop

> Actual checklists will not be this detailed. This is only for demo purposes.

## **Prerequisite** (what you must have before installing a project)

- Runtime: [Node.js](https://nodejs.org)
- Package manager: [npm](https://www.npmjs.com)
- Version control: [Git](https://git-scm.com/)

## **Install packages**

Learn basic `npm` commands [here](http://dreamerslab.com/blog/en/npm-basic-commands/).

Let's get started.

- [Parcel.js](https://parceljs.org)

  Locally (this will be added to `package.json` so other people can use it)

  ```sh
  npm install --save-dev parcel-bundler
  ```

  Or globally (this will **NOT** be added in `package.json`)

  ```sh
  npm install -g parcel-bundler
  ```

- [Jest.js](https://jestjs.io)

  Local

  ```sh
  npm install --save-dev jest
  ```

  Global

  ```sh
  npm install -g jest
  ```

- [Tachyons CSS](http://tachyons.io)
  ```sh
  npm install --save tachyons
  ```

## Setup project

1. Create a `package.json` file using `npm`
   > The `-y` flag will set all options to their default values.
   ```sh
   npm init -y
   ```
2. Setup `git`

   2.1. Init `git`

   ```sh
   git init
   ```

   2.2. Add a `.gitignore` file.

   > This file will exclude any directory/file defined in it, which means `git` will not track all those directory/files.

   ```
   node_modules // where all the packages install
   .cache // default cache folder of Parcel.js
   dist // default build folder of Parcel.js
   ```

3. Create structure

   We will create folder based on 4 steps: `Prepare`, `Develop`, `Test/Deploy` and `Document`.

4. Add `dev`/`watch`/`test`/`build` script in `spackage.json`
   Since we're using `parcel.js`, the scripts should look like this
   ```json
   ...
   "scripts": {
    "dev": "parcel ./2-Develop/src/index.html",
    "test": "jest --watch",
    "build": "parcel build './2-Develop/src/index.html' -d './2-Develop/build'"
   }
   ...
   ```

## Coding process

> This is what an actual develop checklist should look like

- [x] Init project
- [x] Add dev/build/watch script
- [ ] Basic layout:
  - [ ] Search box
  - [ ] Search result list
- [ ] Core:
  - [ ] Mock data
  - [ ] Search function
