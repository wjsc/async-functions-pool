# async-functions-pool
Minimal Async Tasks Pool Manager

[![NPM](https://nodei.co/npm/async-functions-pool.png?downloads)](https://nodei.co/npm/async-functions-pool)

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
