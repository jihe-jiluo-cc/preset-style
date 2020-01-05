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
1. Reset browser styles.
    Reset Elements ```padding``` and ```margin```.
    Remove inputs element ```outline``` and ```border```.
    Remove tag ```a``` link element default color and decoration style.
    Replace autofill input shadow styles.
    Remove tag ```img``` border.

2. Common style snippets.
    Clear floor ```.clear-fix```
    Overflow ellipsis ```.overflow-ellipsis```
    iOS X safe container ```.safe-area```
    Mobile phone balance scroll container ```.scroller```
    
3. Some compatibility snippets.
    Adapter style for MAC OS dark theme

## Example Usage
Using in ```css```, ```less``` and ```sass```:
``` css
@import('preset-style/dist/index.css');
```
Using in ```js```:
``` js
import 'preset-style/dist/index.css'
```
