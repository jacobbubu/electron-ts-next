# electron-ts-next

> A starter project to demonstrate how to build an Electron app. with typescript, next, react and material-ui.

## Quick Start

``` bash
git clone https://github.com/jacobbubu/electron-ts-next
npm install
npm run dev
```

The application will be run in development mode that supports hot module replacement.

## Build for distribution

``` bash
npm run dist
```

If you want to debug in distribution build, run the command as following:

``` bash
npm run run:dist
```

## Commit and release management

I'm trying to follow the rules defined by Semantic-release. For the implementation detail, please refer to [TypeScript library starter](https://github.com/alexjoverm/typescript-library-starter).

I've not done yet completely because of the lack of the code coverage for UI components.

For now, I've made some changes in `packages.json` to bypass the code coverage check in unit test process.
If you'd like to enable it, please change following statements in `package.json`:

```
  ...
  "scripts": {
    "test:prod": "npm run lint && npm run test -- --coverage --no-cache",
  }
  ...
  "jest": {
    "collectCoverage": true
  }
```

## Thanks to

[TypeScript library starter](https://github.com/alexjoverm/typescript-library-starter)

[Electron + Next.js](https://github.com/saltyshiomix/nextron)
