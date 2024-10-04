const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/translate/shakespeare', async (req, res) => {
  const { text } = req.body;
  try {
    const response = await axios.post('https://api.funtranslations.com/translate/shakespeare.json', { text });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error translating text');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
