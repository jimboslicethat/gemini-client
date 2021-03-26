# gemini-client

A NodeJS wrapper for the Gemini API

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

## Development Prerequisites

- Go to Gemini's [sandbox site](https://exchange.sandbox.gemini.com/) to register for a test account.
- Generate an API key for the sandbox account that matches scopes with the API key you will use in the real world _(see Usage > Pre Reqs)_.

## References

- [Gemini REST API Reference](https://docs.gemini.com/rest-api/)
