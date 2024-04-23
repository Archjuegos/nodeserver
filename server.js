const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para procesar datos en formato JSON
app.use(express.json());

// Ruta GET para la página de inicio
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Ruta POST para probar usuarios
app.post('/pruebausuario', (req, res) => {
  res.json({ username: 'richaldo', password: '12345678', wallet: '1234' });
});

app.get('/prueba', (req, res) => {
  res.json({ username: 'richaldo', password: '12345678', wallet: '1234' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto ${PORT}');
});