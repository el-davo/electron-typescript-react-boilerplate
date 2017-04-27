# electron-typescript-react-boilerplate

### What is this?

This is an electron boilerplate project using the below libraries
 
 * Electron
 * Spectron
 * Webpack 2
 * Webpack dev server (Hot reloading)
 * React
 * Typescript
 * Redux
 * Redux-Saga
 * React-material
 * Mocha
 * Sinon
 * Should.js
 * Enzyme
 * Webdriverio

## How to use

You can clone this repo for your own project using the command below

```
git clone https://github.com/el-davo/webpack-react-typescript-boilerplate.git your-project-name
```

## Installation

It is recommended to use yarn for Installation. If you haven't installed yarn please check it out [here](https://yarnpkg.com/en/), then use the command below to install dependencies

```
yarn
```

## Commands

To run the app in development mode use

```
npm run dev
```

To run tests use one of the commands below, the second command will watch for changes and re-run the tests

```
npm run test

npm run test:watch
```

To run the tslinter. The second command will attempt to fix any issues found

```
npm run `lint
npm run lint:fix
```

To get your code coverage

```
npm run coverage
```

To run e2e tests use the command below. These can also be run on your ci environment. Pleasee .travis.yml and appveyor.yml

```
npm run e2e
```

To package the app for your computer os and architecture you can use the command below

```
npm run package
```

To attempt to package for all operating systems, us this command. This can be flaky depending on your environment. It is advised to let your CI environment handle the building of the application

```
npm run package:all
```

## Travis and Appveyor

This project is setup to build for Windows, Linux and MacOs. Travis handles building for Linux and MacOs and Appveyor handles building for windows.
Both these tools are free for open source projects.