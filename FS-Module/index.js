const fs = require("fs");

fs.writeFile('employees.json', ' {"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err, data) => {
    if(err) console.log(err);
    console.log('Succesfully Created');
});

fs.readFile("employees.json", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("File read");
});


fs.appendFile('employees.json', ',\n{"name": "Employee 2 Name", "salary": 3000}', 'utf8', (err, data) => {
    if(err) console.log(err);
    console.log('New Data Added');
});

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
    console.log('File Deleted');
})