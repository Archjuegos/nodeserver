const express = require('express');
const app = express();
const PORT = 443;

// Middleware para procesar datos en formato JSON
app.use(express.json());

// Ruta GET para la página de inicio
app.get('/', (req, res) => {
  res.send('¡Hola, mundo! version 1');
});

// Ruta POST para probar usuarios
app.post('/validateToken', (req, res) => {
    const tokenCrypto = req.body.tokenCrypto; // Obtener el parámetro tokenCrypto del cuerpo de la solicitud
    
    if (tokenCrypto === 'abcd1234') { // Comprobar si el tokenCrypto es igual a '1234'
        res.json({ username: 'Richard', wallet: '1234' });
    } else if(tokenCrypto === 'efgh5678') {
        res.json({ username: 'Vrowinaldo', wallet: '5678' });
    } 
	else if(tokenCrypto === 'ujkl9123') {
        res.json({ username: 'Testing1', wallet: '9123' });
    } 
	else if(tokenCrypto === 'mnop4567') {
        res.json({ username: 'Testing2', wallet: '4567' });
    } 
	else if(tokenCrypto === 'qrst8912') {
        res.json({ username: 'Testing3', wallet: '8912' });
    } 
	else if(tokenCrypto === 'uvwx3456') {
        res.json({ username: 'Testing4', wallet: '3456' });
    } else {
        res.status(401).json({ message: 'Token inválido' }); // Devolver un error 401 si el token es inválido
    }
});

app.post('/validateUser', (req, res) => {
    const username = req.body.username;
	const password = req.body.password;
    
    if (username === 'Richard' && password === '12345678') { // Comprobar si el tokenCrypto es igual a '1234'
        res.json({ user: 'okay'});
    } else if(username === 'Vrowinaldo' && password === '12345678') {
        res.json({ user: 'okay'});
    } else if(username === 'Testing1' && password === '123456') {
        res.json({ user: 'okay'});
    } else if(username === 'Testing2' && password === '123456') {
        res.json({ user: 'okay'});
    } else if(username === 'Testing3' && password === '123456') {
        res.json({ user: 'okay'});
    } else if(username === 'Testing4' && password === '123456') {
        res.json({ user: 'okay'});
    } else {
        res.status(401).json({ message: 'Usuario incorrecto' }); // Devolver un error 401 si el token es inválido
    }
});

app.post('/prueba', (req, res) => {
  res.json({ username: 'richaldo', password: '12345678', wallet: '1234' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto '+PORT);
});
