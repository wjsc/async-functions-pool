const queue = [];
const add = fx => queue.push(fx);
const run = async parallel => {
  const jobs = [];
  for(let i = 0 ; i < Math.min(parallel, queue.length); i ++){
    jobs.push(runJob());
  }
  return Promise.all(jobs);
}
const runJob = async () => {
  await queue.shift()();
  if(queue.length){
    await runJob();
  }
};
module.exports = { add, run }
