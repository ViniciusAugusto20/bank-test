# bank-test
## :mag: Who is

This project is a table where a user's bank history is shown. More details see the following gif.

![](/public/demonstrationGif.gif)

## :building_construction: Stack
This project was developed with the following technologies:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)

In the development of the project, in addition to the technologies already mentioned, it was also used [Context Api](https://pt-br.reactjs.org/docs/context.html) and [Husky](https://github.com/typicode/husky). The code organization and sctruction is basead on the Atomic Design :atom_symbol:.

## :rocket: Startup

__Backend__

For the backend of this project it is necessary to have [Json-server](https://www.npmjs.com/package/json-server) installed globally. So after having the same installed, to run the project it is necessary to go to the mock folder (`src/assets/mock`) and execute the command below:

```
json-server --watch db.json --port 5555
```

__Frontend__


```js
  yarn install
```

Later

```js
  yarn start
```

## :test_tube: Tests

The application has 4 tests developed in Cypress.

  * `try to search a valid client` - This test validates that when searching for a user who performed a transaction, a not found message is not returned.
  * `try to search a not valid client` - This test validates that when searching for a user who has not made a transaction, a not found message is returned.
  * `try to see all scheduleds transfers` - This test evaluates if user can change the filters, and see a only schedule transactions.


To run the tests, use the command:

```js
  npm test
```

## How works the application

This project consists of an application where all transactions that occurred in a user's account are displayed. It consisting of a main screen where it is possible to filter by the type of operation (Tudo, Entrada, Saída and Futuro). It is also looking for a member who may have made a possible transaction for the user.