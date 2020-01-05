# preset-style


[![npm version][npm-version-badge]][npm-version-link]
[![npm version][npm-downloads-badge]][npm-downloads-link]
[![npm bundle size][npm-bundle-size-badge]][npm-bundle-size-link]
[![gitHub-last-commit][gitHub-last-commit-badge]][gitHub-last-commit-link]
[![license][license-badge]][license-link]

Preset web application styles.

## Installation
Using npm:
``` Shell
npm install preset-style --save
```
Using yarn:
``` Shell
yarn add preset-style
```

## Features
### Reset browser styles:
1. Reset Elements ```padding``` and ```margin```
2. Remove inputs element ```outline``` and ```border```
3. Remove tag ```a``` link element default color and decoration style
4. Replace autofill input shadow styles
5. Remove tag ```img``` border

### Common style snippets:
1. Clear floor ```.clear-fix```
2. Overflow ellipsis ```.overflow-ellipsis```
3. iOS X safe container ```.safe-area```
4. Mobile phone balance scroll container ```.scroller```
    
### Some compatibility snippets:
1. Adapter style for MAC OS dark theme

## Example Usage
Using in ```css```, ```less``` and ```sass```:
``` css
@import('preset-style/dist/index.css');
```
Using in ```js```:
``` js
import 'preset-style/dist/index.css'
```

[npm-version-badge]: https://img.shields.io/npm/v/preset-style?logo=npm
[npm-downloads-badge]: https://img.shields.io/npm/dm/preset-style?color=blue
[npm-bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/preset-style
[gitHub-last-commit-badge]: https://img.shields.io/github/last-commit/dotkiro/preset-style?logo=github&color=blue
[license-badge]: https://img.shields.io/github/license/dotkiro/preset-style?logo=apache&color=blue

[npm-version-link]: https://www.npmjs.org/package/preset-style
[npm-downloads-link]: http://npm-stat.com/charts.html?package=preset-style
[npm-bundle-size-link]: https://npm.runkit.com/preset-style
[gitHub-last-commit-link]: https://github.com/dotkiro/preset-style
[license-link]: https://github.com/dotkiro/preset-style/blob/master/LICENSE
