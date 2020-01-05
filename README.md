# preset-style

[![npm version](https://img.shields.io/npm/v/preset-style.svg?style=flat-square)](https://www.npmjs.org/package/preset-style)
[![npm downloads](https://img.shields.io/npm/dm/preset-style.svg?style=flat-square)](http://npm-stat.com/charts.html?package=preset-style)


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
