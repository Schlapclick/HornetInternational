import {DoesUserExist, AddUser} from './database.js'
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.post('/signup', async (req, res) => {
    //res.send(`email is:${req.body.email}.`);
    const tUsername = req.body.username
    const tEmail = req.body.email
    const tPassword = req.body.password

    const success = await DoesUserExist(req.body.email)

    if (!success && isValidID(tEmail)) {
      const usr = await AddUser(tEmail, "", "", tPassword, tUsername)
      res.redirect('/login.html')
    }
    else {
      res.redirect('/signup.html')
    }
    
  });
  
  const port = 5500;
  
  app.listen(port, () => {
    console.log(`Server running on port${port}`);
  });

  function isValidID(id) {
    const site = id.substring(id.length - 9);
    if (site == "@csus.edu") {
      return true;
    }
    return false;
  };