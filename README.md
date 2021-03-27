# gemini-client

**🚨 WIP: unreleased 🚨**

A NodeJS client library for the [Gemini API](https://docs.gemini.com/rest-api/)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.png?v=101)
[![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.png?v=102)](https://opensource.org/licenses/GPL-3.0/)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

## Install

- TODO

## Usage

### Prerequisites

1. You will need to [create an API key](https://exchange.gemini.com/settings/api) for your Gemini account.

   - The API Key will need a `Master` scope to be able to place trades.
   - Select `Trading` & `Auditor` in the API Key Settings.

1. Step 1 will give you both an "API Key" that will serve as both your user name, and an "API Secret" that Gemini uses to sign messages.
1. Needless to say, **please keep this API key somewhere secret and safe**. It's your funds, your coins, your responsibility to protect. It is recommended that you pass your API key to the lib via an environment variable and don't leave it hardcoded anywhere _(I recommend using [dotenv](https://www.npmjs.com/package/dotenv))_.

### Basic Setup

```js
console.log("TODO: Setup documentation James");
```

## Development

### Dev Prerequisites

- Go to Gemini's [sandbox site](https://exchange.sandbox.gemini.com/) to register for a test account.
- Generate an API key for the sandbox account that matches scopes with the API key you will use in the real world _(see Usage > Pre Reqs)_.

### Setup

1. Create a new `.env` file and add your API key. This environment variable will be used in the test suite for testing against the Gemini sandbox. You can view the `.env.example` for more info.

### To Run Tests 🧪

```sh
yarn test
# or
yarn test:watch
```

## References

- [Gemini REST API Reference](https://docs.gemini.com/rest-api/)
