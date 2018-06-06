import express from 'express';
// import dataFile from './src/data/data.json';

const app = express();
const PORT = 3388;

// app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'src/views');

//serve static files
app.use(express.static('public'));

app.get('/index', (req,res) => {
  res.send(`Node and express server running on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`server runningi on port ${PORT}`);
});
