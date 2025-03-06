const express = require('express');
require('dotenv').config();
const app = express();
const routes = require('./presentation/routes');

app.use(express.json());


app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Welcome to the User API');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});