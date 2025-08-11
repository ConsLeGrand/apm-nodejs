require('./elastic-apm'); // Charger APM avant Express

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello OpenShift + Elastic APM 🎯');
});

app.get('/lente', (req, res) => {
  setTimeout(() => {
    res.send('Réponse lente ⏳');
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
