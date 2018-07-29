const pool = require('../index.js')();

describe('Async functions Pool Module Test', () => {

  it('Runs one job.', async () =>{
    pool.add(() => Promise.resolve(1));
    expect(await pool.run(1)).toEqual([1]);
  });

  it('Runs one job even with parallel mode.', async () =>{
    pool.add(() => Promise.resolve(1));
    expect(await pool.run(5)).toEqual([1]);
  });

  it('Runs multiple jobs in serial mode.', async () =>{
    pool.add(() => Promise.resolve(1));
    pool.add(() => Promise.resolve(2));
    pool.add(() => Promise.resolve(3));
    pool.add(() => Promise.resolve(4));
    pool.add(() => Promise.resolve(5));
    pool.add(() => Promise.resolve(6));
    expect(await pool.run(1)).toEqual([1,2,3,4,5,6]);
  });

  it('Runs multiple jobs in parallel mode.', async () =>{
    pool.add(() => Promise.resolve(1));
    pool.add(() => Promise.resolve(2));
    pool.add(() => Promise.resolve(3));
    pool.add(() => Promise.resolve(4));
    pool.add(() => Promise.resolve(5));
    pool.add(() => Promise.resolve(6));
    expect(await pool.run(2)).toEqual([1,2,3,4,5,6]);
  });

  it('Runs multiple jobs in full parallel mode.', async () =>{
    pool.add(() => Promise.resolve(1));
    pool.add(() => Promise.resolve(2));
    pool.add(() => Promise.resolve(3));
    pool.add(() => Promise.resolve(4));
    pool.add(() => Promise.resolve(5));
    pool.add(() => Promise.resolve(6));
    expect(await pool.run(6)).toEqual([1,2,3,4,5,6]);
  });

})