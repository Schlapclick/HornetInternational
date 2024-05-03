import {AddMessageToUser, GetAllMessagesFromUser} from './database.js'
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import {addMessageToUI} from './messages.js';
var user = "person1"
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.post('/sendmessage', async (req, res) => {
    //res.send(`email is:${req.body.email}.`);
    const newMessage = req.body.newMessage
    await AddMessageToUser(user, newMessage)
    
  });

  const port = 5502;
  
  app.listen(port, () => {
    console.log(`Server running on port${port}`);
  });

  async function getMessages(user) {
    const messages = await GetAllMessagesFromUser(user)
    for (let i = 0; i < messages.length; i++) {
        message.addMessageToUI(messages[i].message)
    }
  }