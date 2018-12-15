# Build App Thành's Way

Table of content:

- [Introduction](#intro)
- [Getting started](#get-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Structure](#structure)
- [References](#references)

<a name="intro"></a>

## Introduction

> There are many ways to build an application. This is **MY** way of building an application (**as a front-end developer**).

This repository is a demo showing the process of making a simple live search (offline data) web application using `HTML/CSS` and `Javascript`.

Features:

1. Sample checklist for each step (`Prepapre`, `Develop`, `Test & Deploy`, `Document`).
2. A running demo (duh)
3. Unit testing with [Jest][jest]

<a name="get-started"></a>

## Getting started

<a name="prerequisites"></a>

### Prerequisites

- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com/)

<a name="installation"></a>

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/thanh-nguyen-95/build-app-thanhs-way.git
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

<a name="structure"></a>

## Structure

The project is structured based on the process of how I build an application. For more detail, please consult the `.md` file in each step's folder.

<a name="references"></a>

## References

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
