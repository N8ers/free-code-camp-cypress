# fcc-cypress

Congratulations! You've found the companion repository to a [Free Code Camp](https://www.freecodecamp.org/) talk on the end-to-end testing tool [Cypress](https://www.cypress.io/)!

The frontend of the app is written in vue.js, but please don't look at it too closely! Some best practices were ignored for the sake of education.

**NOTE:** You must have [Node.js](https://nodejs.org/en) installed for this project to work locally.

## Overview of Branches

This project has several branches, feel free to use the one that best meets your needs.

1. `1-start-here` - If you want to install and initialize cypress on your own, start here.
1. `2-cypress-initialized` - Cypress is initialized and configured, but there are no test prompts.
1. `3-test-your-might` - Cypress is initialized and configured, several test files have been made with test prompts that you can then write tests for. This branch is an oppertunity to TEST YOUR MIGHT 💪.
1. `4-cypress-answers` - Answers to the prompts that were provided in branch `3-test-your-might`.

## Project Setup

1. clone the project

```sh
git clone git@github.com:N8ers/free-code-camp-cypress.git
```

2. check out the branch of your choice (the snippet below checks out the branch `3-test-your-might`)

```sh
git checkout 3-test-your-might
```

3. install dependencies

```sh
npm install
```

4. run the project locally

```sh
npm run dev
```

If you've checked out a branch other than `1-start-here`, then cypress will be a part of your dependencies. The cypress GUI can be launched with `npx cypress open`.

**NOTE:** `npx cypress open` **REQUIRES** the project server to be running (step 4 above).
