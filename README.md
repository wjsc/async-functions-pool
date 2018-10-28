![Current Version](https://img.shields.io/npm/v/async-functions-pool.svg)
![NPM Minified size](https://img.shields.io/bundlephobia/min/async-functions-pool.svg)
![Github Code Size](https://img.shields.io/github/languages/code-size/wjsc/async-functions-pool.svg)
![Downloads/Week](https://img.shields.io/npm/dw/async-functions-pool.svg)
![Issues](https://img.shields.io/github/issues/wjsc/async-functions-pool.svg)
![License](https://img.shields.io/github/license/wjsc/async-functions-pool.svg)
![Contributors](https://img.shields.io/github/contributors/wjsc/async-functions-pool.svg)

[![NPM](https://nodei.co/npm/async-functions-pool.png)](https://nodei.co/npm/async-functions-pool)

# async-functions-pool
Minimal Async Tasks Pool Manager

## Usage
```
// 1. Import module and execute it to create a pool
const pool = require('async-functions-pool')();

// 2. Add functions to the queue. For example:
pool.add(() => fetch('http://someAPI.com/resource/1'));
pool.add(() => fetch('http://someAPI.com/resource/2'));
pool.add(() => fetch('http://someAPI.com/resource/3'));
pool.add(() => fetch('http://someAPI.com/resource/4'));
pool.add(() => fetch('http://someAPI.com/resource/5'));
pool.add(() => fetch('http://someAPI.com/resource/6'));


// 3. Set number of parallel jobs and run!
async function foo(){
  const results = await pool.run(3);
  console.log('All jobs have finished');
}
foo();
```

## FAQs

- How minimal it is? 25 Lines of code and no dependencies
- Can it run common sync functions? Yes
- Which version of Node is required? > 8.0.0 because it uses async/await
