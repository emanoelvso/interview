const express =  require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;
const transactions = [];

app.post('/transactions', (req, res) => {
  transactions.push(req.body);
  res.send({ message: 'OK'});
});

app.get('/transactions', (req, res) => {
  res.send(transactions);
});


app.listen(3000, () => {
  console.log(`Running into ${port} port`);
})
