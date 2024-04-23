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
        res.json({ username: 'Richaldo', wallet: '1234' });
    } else if(tokenCrypto === 'efgh5678') {
        res.json({ username: 'Vrowinaldo', wallet: '5678' });
    } else {
        res.status(401).json({ message: 'Token inválido' }); // Devolver un error 401 si el token es inválido
    }
});

app.post('/validateUser', (req, res) => {
    const username = req.body.username;
	const password = req.body.password;
    
    if (username === 'Richaldo' && password === '12345678') { // Comprobar si el tokenCrypto es igual a '1234'
        res.json({ user: 'okay'});
    } else if(username === 'Vrowinaldo' && password === '12345678') {
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
