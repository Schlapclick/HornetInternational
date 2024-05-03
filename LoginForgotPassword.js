import { SetActiveUser } from './ActiveUser.js';
import {DoesUserExist, isValidPassword} from './database.js'
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
var retrievedEmail = "";
var retrievedPassword = "";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.post('/recoverPassword', (req, res) => {
    retrievedEmail = req.body.email
    res.redirect('/login.html')
    console.log(retrievedEmail);
    
  });
app.post('/login', async (req, res) => {
    retrievedEmail = req.body.Username
    retrievedPassword = req.body.Password
    console.log(retrievedEmail)
    console.log(retrievedPassword)
    const success = await DoesUserExist(retrievedEmail)
    if (success) {
      const success = await isValidPassword(retrievedEmail, retrievedPassword)
      if (success) {
        await SetActiveUser(retrievedEmail)
        res.redirect('/home.html')
      }
      else {res.redirect('/login.html')}
    }
    else {res.redirect('/login.html')}
    
});
  const port = 5501;
  
  app.listen(port, () => {
    console.log(`Server running on port${port}`);
  });