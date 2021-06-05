const HelloFunc = require('./helloWorld');

// console.log(HelloFunc.name);

// HelloFunc.helloFunc();

setInterval(()=>{
    HelloFunc.Hello();
}, 1000);

setTimeout(()=>{
    console.log(HelloFunc.name);
}, 5000);
