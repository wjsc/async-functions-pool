# async-functions-pool
Minimal Async Tasks Pool Manager

Usage
```
// 1. Import module
const pool = require('async-functions-pool');

// 2. Add functions to the queue. Each function must return a Promise.
pool.add(() => Promise.resolve()); 
pool.add(() => Promise.resolve());
pool.add(() => Promise.resolve());
pool.add(() => Promise.resolve());

// 3. Set number of parallel jobs and run!
await pool.run(3);
console.log('All jobs have finished');
```


