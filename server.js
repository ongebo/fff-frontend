const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port);
