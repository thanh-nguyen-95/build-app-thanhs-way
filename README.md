# Build Apps Thành's Way

Table of content:

- [Introduction](#intro)
- [Getting started](#get-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Structure](#structure)
- [References](#references)

## Introduction <div id="#intro"></div>

> There are many ways to build an application. This is **MY** way of building an application (**as a front-end developer**).

This repository is a demo showing the process of making a simple live search (offline data) web application using `HTML/CSS` and `Javascript`.

Features:

1. Sample checklist for each step (`Prepapre`, `Develop`, `Test & Deploy`, `Document`).
2. A running demo (duh)
3. Unit testing with [Jest][jest]

<div id="#get-started"></div>

## Getting started

### Prerequisites <div id="#prerequisites"></div>

- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com/)

### Installation <div id="#installation"></div>

1. Clone the repository

   ```sh
   git clone
   ```

2. Install all packages

   ```sh
   cd ./build-app-thanhs-way
   npm install
   ```

3. Build

   3a. Build for development

   ```sh
   npm run dev
   ```

   3b. Build for production

   ```sh
   npm run build
   ```

   3c. Test

   ```sh
   npm run test
   ```

## Structure <div id="#structure"></div>

The project is structured based on the process of how I build an application. For more detail, please consult the `.md` file in each step's folder.

## References <div id="#references"></div>

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com)
- [Git](https://git-scm.com/)
- [Parcel.js](https://parceljs.org)
- [Babel](https://babeljs.io/)
- [Tachyons](http://tachyons.io)
- [Jest.js](https://jestjs.io)
- [Markdown](https://daringfireball.net/projects/markdown/)
- [Basic npm commands](http://dreamerslab.com/blog/en/npm-basic-commands/)
- [Dillinger - Online markdown editor](https://dillinger.io/)
- [Markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[jest]: https://jestjs.io
