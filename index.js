const run = queue => async parallel => {
  const results = [];
  const jobs = [];
  for(let i = 0 ; i < Math.min(parallel, queue.length); i ++){
    jobs.push(runJob(queue, results));
  }
  await Promise.all(jobs);
  return results;
}
const runJob = async (queue, results) => {
  results.push(await queue.shift()());
  if(queue.length){
    await runJob(queue, results);
  }
};
module.exports = () => { 
  const queue = []; 
  return { 
    add: fx => queue.push(fx),
    run: run(queue) 
  }
}
