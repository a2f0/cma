# Overview

The server currently uses NodeJS v12.13.1 (see `.nvmrc`). Use [nvm](https://github.com/nvm-sh/nvm) to install it locally (i.e. `nvm install v12.13.1`)

# Developer Instructions

1. Run git clone https://github.com/deepeeess/cma
2. Run `npm install`
3. Run `expo start`
4. Run `npm install -g react-native-cli`
5. Run `react-native start --reset-cache`

# Initial build

1. Run `nvm uninstall v12.4.0`.
2. Run `nvm install v12.4.0`.
3. Run `nvm use v12.4.0`.
4. Run `npm install -g expo-cli`.
5. Run `cd /tmp && expo init cma`
   1. blank - a minimal app as clean as an empty canvas
   2. name: "CMA"
   3. slug: "cma"
6. Run `cd cma && npm start`.

# iOS

## Starting the dev server

1. Run `cd cma && npm start`