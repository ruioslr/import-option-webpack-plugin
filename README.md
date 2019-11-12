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
    demo1: 'demo1',
    deep: {
        demo2: 'demo2'
    },
    demo3: 'demo3',

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
import {value as value1} from './{{demo1}}';
import {value as value2} from './{{deep.demo2}}';
import {value as value3} from './{{demo3}}/{{demo3}}';
```