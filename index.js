const queue = [];
const results = [];
const add = fx => queue.push(fx);
const run = async parallel => {
  const jobs = [];
  for(let i = 0 ; i < Math.min(parallel, queue.length); i ++){
    jobs.push(runJob());
  }
  await Promise.all(jobs);
  return results;
}
const runJob = async () => {
  results.push(await queue.shift()());
  if(queue.length){
    await runJob();
  }
};
module.exports = { add, run }
