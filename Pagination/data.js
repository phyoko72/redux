const arr = []

console.log('Data Rendered!!!');

for (let index = 1; index <= 100; index++) {
    const data = { id: index, content: `This is Content Number ${index}` }
    arr.push(data)   
}

export default arr