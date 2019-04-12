# MindDoc's TypeScript Node Starter
A Node.js + Express + TypeScript skeleton.

See the [Powering your Back-End applications with TypeScript](https://slides.com/darioblanco/powering-your-back-end-applications-with-typescript) presentation.

The main purpose of this repository is to show an example project setup and workflow for writing Node and Express code in TypeScript. Community contributions and recommendations for improvements are encouraged and will be most welcome.

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/get-started) (optional)

## Getting started

Clone the repo

```
git clone https://github.com/minddocdev/typescript-node-starter.git <project_name>
```

Install dependencies
```
cd <project_name>
npm install
```

Run the development server with `ts-node-dev`
```
npm run dev
```

Run the production server with `ts-node`
```
npm start
```

Or the `ts-node` dockerized production server
```
npm docker
```

## TypeScript compilation

TypeScript uses the file `tsconfig.json` to adjust project compile options.

You can run the compilation with the compile task.

```
npm run compile
```

## TSLint

TSLint is a code linter which mainly helps catch minor code quality and style issues. TSLint is very similar to ESLint or JSLint but is built with TypeScript in mind.

### TSLint rules

Like most linters, TSLint has a wide set of configurable rules as well as support for custom rule sets. All rules are configured through `tslint.json`. In this project, we are using AirBnB TSLint rules with some example custom rules.

### Running TSLint

We use npm scripts to invoke TSLint. To run TSLint you can call the TSLint task.

```
npm run lint
```

## Jest Testing

This example uses [Jest](https://jestjs.io/), and a example TypeScript configuration in `jest.config.js`.

Run the tests
```
npm run test
```
