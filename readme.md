# Google Sign In Page Tests

![Cypress Tests](https://github.com/benjaminpinto/Google-Sign-In/actions/workflows/main.yml/badge.svg)

This project is a result of a code challenge that demands write test cases for [Google's Sign In page](https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp).

To write these tests, I've used a few plugins to extend Cypress capabilities and to check the code syntax:

- [cypress-testing-library](https://testing-library.com/docs/cypress-testing-library/intro/);
- [eslint](https://eslint.org/docs/user-guide/getting-started) and [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress);

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I've used versions `v16.15.0` and `8.5.5` of Node.js and npm, respectively. I recommend you to use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run open` to open Cypress in interactive mode.

> **Note:** This project doesn't handle sensible data to perform tests (tokens/passwords/etc), so I didn't used a `cypress.env.json` file.

> **Important:** This project uses Github actions to implement CI. If you want to clone it and run at your own repository, remember to update project's ID at [`cypress.config.js`](./cypress.config.js) file, and set your CYPRESS_RECORD_KEY at Github secrets.

## About the project structure

- Spec files are localized at [`cypress/e2e`](/cypress/e2e/) folder;
- Custom commands are organized at [`support`](cypress/support) folder;
- Github Actions is properly configured and the project tests results are connected with Cypress Dashboard. I've configured parallelization with 4 threads at Github Actions, but considering that I've reached my monthly free tier limit, just one thread is in fact executing all spec files.

## Test Cases

#### Sign In page

| ID  | Title                                                  | Given                                            | When                                                        | Then                                                                                                                                   | Automated? | Passing? | Issue? |                                                                                 Obs                                                                                 |
| --- | :----------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | :--------: | :------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| 01  | Check de visibility of page's main elements            | The user access sign in page                     | The page loads                                              | Logo, title, input email/phone input field, 'forgot mail?', 'learn more', 'create account' and 'Next' button should be visible.        |     ✅     |    🟢    |   -    |                                                                                  -                                                                                  |
| 02  | Check click 'Next' without provide a valid email/phone | The user is at sign in page                      | He clicks 'Next' button without provide a valid email/phone | Input field must turn invalid and show a error message to the user                                                                     |     ✅     |    🟢    |   -    |                                                                                  -                                                                                  |
| 03  | Check providing an invalid email address               | The user is at sign in page                      | 'notvalid@nodomain' is given at email/phone input field     | Input field must turn invalid and show a error message to the user                                                                     |     ✅     |    🟢    |   -    |                                                                                  -                                                                                  |
| 04  | Check providing an incomplete email address            | The user is at sign in page                      | 'user.name' is given at email/phone input field             | The application should complete the partial address with '@gmail.com', verify that user.name@gmail.com exists and ask for the password |     ✅     |    🟢    |   -    | Inside automated suite, the password page isn't showed due to Google's security policy.<br />[Read more](https://support.google.com/accounts/answer/7675428?hl=en). |
| 05  | Check providing special characters                     | The user is at sign in page                      | '&¨%$#' is given at email/phone input field                 | Input field must turn invalid and show a error message to the user                                                                     |     ✅     |    🟢    |   -    |                                                                                  -                                                                                  |
| 06  | Check 'forgot e-mail' redirection                      | The user is at sign in page                      | He clicks at 'Forgot e-mail?' link                          | He should be redirected to 'usernamerecovery' page                                                                                     |     ❌     |    🟢    |   -    |                                                                                  -                                                                                  |
| 07  | Check 'Learn more' redirection                         | The user is at sign in page                      | He clicks at 'Learn more' link                              | Another tab should be opened with the requested information                                                                            |     ❌     |    🟢    |   -    |                                                                                  -                                                                                  |
| 08  | Check 'Create account' functionality                   | The user is at sign in page                      | He clicks at 'Create Account' link                          | An option list should be shown asking who is the new account for (himself, a child or a business)                                      |     ❌     |    🟢    |   -    |                                                                                  -                                                                                  |
| 09  | Check the valid e-mail recognize                       | The user is at sign in page                      | He provide a valid e-mail address and clicks Next           | The password must be requested and the valid email should be shown near the top of the page                                            |     ❌     |    🟢    |   -    |                                                                                  -                                                                                  |
| 10  | Check forgot password functionality                    | The user provided a valid email and clicked Next | The password ask page appear                                | Should exist a link 'Forgot password', tha properly redirect the user to this functionality                                            |     ❌     |    🟢    |   -    |                                                                                  -                                                                                  |
| 11  | Check successful login                                 | The user provided a valid email and clicked Next | He provide a valid password and click Next                  | Authentication must work and the user should be redirected to the next step of authentication (2FA)                                    |     ❌     |    🟢    |   -    |                                                                                  -                                                                                  |

---

This project was created by [Benjamin Pinto](https://www.linkedin.com/in/benjamin-pinto/).
