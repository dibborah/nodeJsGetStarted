// starting operating system processes
console.log('first');

setTimeout(() => { // setT is asynchronous => Gets offloaded
  console.log('second');
}, 0);

console.log('third');

// completed and existed operating system processes