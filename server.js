require('dotenv').config()
const express = require('express');
const app = express();
const topStories = require('./routes/storiesRoutes')

app.use(express.json())
app.get('/test', (req,res) =>  { 
  res.send('nice!')
})
app.use('/api/topStories', topStories)


app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening on port ${process.env.PORT || 8080}`);
});






