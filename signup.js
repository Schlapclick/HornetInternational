import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.post('/signup', (req, res) => {
    //res.send(`email is:${req.body.email}.`);
    console.log(req.body.email)
    res.redirect('/home.html')
    
  });
  
  const port = 5500;
  
  app.listen(port, () => {
    console.log(`Server running on port${port}`);
  });