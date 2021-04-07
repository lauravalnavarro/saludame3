const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
   let navegador = req.headers['user-agent'];
   res.send(navegador).end()
  
  });

app.listen(3000, () => console.log('Listening on port 3000!'));