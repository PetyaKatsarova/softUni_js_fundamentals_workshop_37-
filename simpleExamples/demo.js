let fs = require('fs');
//  no './': look for registered module
console.log(fs.readFileSync('./data.txt'));
// if no 'utf-8' given returns weird staff: in stream?
console.log(fs.readFileSync('./data.txt', 'utf-8'));
console.log(fs.readFileSync('./data.json', 'utf-8'));
let dataAsString = fs.readFileSync('./data.json', 'utf-8');
let data = JSON.parse(dataAsString);
console.log(data.name);
console.log(data.position);

data.position = "SoftWare Engineer";
data.age++;
console.log(data.position);
console.log(data.age);

// created auto new file data_2.json
data_2 = fs.writeFileSync("./data_2.json", JSON.stringify(data), "utf-8");
data_3 = fs.writeFileSync("./data_3.json", JSON.stringify(data, null, 2), "utf-8");
