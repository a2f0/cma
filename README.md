# Overview

The server currently uses NodeJS v12.4.0 (see `.nvmrc`). Use [nvm](https://github.com/nvm-sh/nvm) to install it locally (i.e. `nvm install v12.13.1`)

This project used [expo](https://expo.io/), so be careful and aware when using `react-native` commands.

## Developer Instructions

1. Run `npm install`
2. Run `npx expo start`

## Initial build

1. Run `nvm uninstall v12.4.0`.
2. Run `nvm install v12.4.0`.
3. Run `nvm use v12.4.0`.
4. Run `npm install -g expo-cli`.
5. Run `cd /tmp && expo init cma`
   1. blank - a minimal app as clean as an empty canvas
   2. name: "CMA"
   3. slug: "cma"
6. Run `cd cma && npm start`.
7. Install navigation with `expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens`
8. Install other deps with `expo install react-navigation-stack @react-native-community/masked-view react-native`
9. Install watchman with `brew install watchman` (MacOS).
