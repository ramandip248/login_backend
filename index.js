const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(express.json());
app.use(express.json());
app.use(cors());

app.post('/api/login', (req, res) => {
  const { email, password,isRemember } = req.body;
  if (email === 'test@gmail.com' && password === '1234') {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials.' });
  }
});


app.listen(port, () => {
  console.log(`Server running on ${port}`);
});