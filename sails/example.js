function pause(ms) {return new Promise(resolve => setTimeout(resolve, ms))}

await pause(2000)
console.log('OK')
await pause(1000)
console.log('and again')

