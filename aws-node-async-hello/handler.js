console.log('Async hello example started at', new Date());

async function justWait() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 100);
  });
}

module.exports.sayHelloAsync = async (event) => {
  console.log('At', new Date(), 'got', event);
  await justWait();
  console.log('At', new Date(), 'hello');
  return '"hello"';
};
