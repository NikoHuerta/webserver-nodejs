
//console.log('hi world');
const http = require('http');

http.createServer((req, res) => {
   
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});
    // const persona = {
    //     id: 1,
    //     nombre: 'Nicolas',
    // };

    // res.write(JSON.stringify(persona));
    // res.write('id, nombre\n');
    // res.write('1, Amparo\n');
    // res.write('2, Nathalie\n');
    // res.write('3, Sr Puppy\n');
    // res.write('4, Nicolas\n');

    res.write('Hola mundo');
    res.end();
}).listen(8080);


console.log('Escuchando el puerto 8080');