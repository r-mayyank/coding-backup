const start = Date.now();

function end() {
    const timeEnd = Date.now();
}
setTimeout(() => {
    const millis = Date.now() - start;
    console.log(`second elapsed = ${Math.floor(millis/1000)}`);
    console.log('second elapsed = ' + Math.floor(millis/1000));
}, 1000);