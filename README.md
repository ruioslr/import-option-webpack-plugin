# import-option-webpack-plugin

## Install: 


```sh
# npm
npm install import-option-webpack-plugin -D
# or Yarn
yarn add import-option-webpack-plugin -D
```

## Usage:

**webpack.config.js**
``` js
const options = {
    path1: 'demo1',
    deep: {
        path2: 'demo2'
    },
    path3: 'demo3',
}

module.exports = {
    resolve: {
        plugins: [
            new ResolveFirstPlugin(options),
        ]
    },
}

```
some-module.js

```js
import {value as value1} from './{{path1}}';
import {value as value2} from './{{deep.path2}}';
import {value as value3} from './{{path3}}/{{path3}}';
```