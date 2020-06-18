All exercices are under the exercices folder.
All the tests are into test folder.

Tests use Mocha and the nodejs Assert assertion library.
Doc is here: https://mochajs.org/

This projet uses ES6, to be able to use ES6 we added the following line to package.json => "type": "module"

How to use this project:

1 - Do `npm install`

2 - Do an exercice

3 - Test this exercice with `npm run test`. To do this without being troubled by the other tests, you can add `.only` after the `it` in order to have `it.only(...` then the only tests that will run are the one where there is `.only`

It is recomended to use Visual Studio Code because of it's simplicity. You can use the built-in terminal easily on any OS (it is located under `terminal -> new terminal` on the top bar).