## TEMPLATE-NEXT-TYPESCRIPT

## Goal

This project is a template for creating a website with `Next.js` and `TypeScript` using my favorite tools.

This project use `eslint` and `prettier` for enforcing the style through the project. I also use `cypress` for managing the end-to-end test and the code coverage.

Finally, I am using `jsdoc` and `better-doc` for having a beautiful development documentation.

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Installation](#installation)
- [Documentation](#documentation)
- [Organization](#organization)
- [Development](#development)
- [Running](#running)
- [Commands](#commands)
- [Links](#links)

## Installation

For installing the project, a simple command is enough :

```
$ npm install
```

## Documentation

The jsdoc can be generated locally with the following command :

```
$ npm run build:docs
```

## Organization
#### Organization of the global folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| coverage      | The coverage summary generated by cypress and istanbul  |
| cypress       | Regroup the e2e test                                    |
| out           | The documentation generated by jsdoc                    |
| public        | Regroup the images and public files                     |
| src           | Regroup the source code                                 |

#### Organization of the src folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| components    | Regroup the components used inside the pages            |
| constants     | Regroup the exported constants                          |
| pages         | Regroup the components representing the pages           |
| services      | Regroup the services of the app                         |
| styles        | Regroup the scss files                                  |
| types         | Regroup the prop type files                             |

#### Packages

- **react**: The react library
- **react-dom**: The react dom manipulator
- **next**: Framework for building the app
- **swr**: For fetching data from api
- **babel-plugin-istanbul**: For connecting istanbul with babel
- **check-code-coverage**: For checing the code coverage from summary file
- **nyc**: for running the command of the package in node_modules
- **sass**: For managing the style of the app under scss file
- **start-server-and-test**: For launching the app then the test
- **@cypress/code-coverage**: For connecting the
- **@types/node**: Adding the type for node
- **@types/react**: Adding the type for react
- **jsdoc**: For building the documentation
- **better-docs**: Adding new variable and template for the jsdoc documentation
- **cypress**: For managing and writting the e2e test
- **eslint**: The linter of the app
- **eslint-config-next**: The recommended config of next for the linter
- **eslint-config-prettier**: For adding the config file of prettier
- **eslint-plugin-import**: Adding the support for new recommended file
- **@typescript-eslint/eslint-plugin**: For connecting eslint with typescript
- **@next/eslint-plugin-next**: For connecting eslint with next
- **eslint-plugin-prettier**: For connecting eslint with prettier
- **prettier**: The style enforcer
- **@mui/material**: Adding materiel design
- **@emotion/styled**: Adding the emoticon of materiel design
- **@emotion/react**: Adding the style of react
- **typescript**: Enforce type for js
- **@typescript-eslint/parser**: Typescript official parser

## Commands

- **npm run dev**: Run the project in development mode
- **npm run start**: Run the build project
- **npm run lint**: Run the linter and fix the errors of coding style (if possible)
- **npm run build**: Build the project
- **npm run build:doc**: Build the documentation from the comments in the code
- **npm run test**: Run a server on port 3000 and run the e2e test
- **npm run cypress:run**: Run the test in the console and create summary for code coverage
- **npm run cypress:open**: Run the cypress browser
- **npm run cypress:coverage**: Check the code coverage of the project (after being generated with cypress)
- **npm run check-update**:  Check if the package are up to date

## Links
