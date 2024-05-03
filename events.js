import { GetActiveUser } from './ActiveUser.js';
import { SetEventsForUser } from './database.js'
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
var retrievedEmail = "";
var retrievedPassword = "";
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static(__dirname));
app.post('/events', async (req, res) => {
    var subscriptions = [req.body.event1, req.body.event2,
                         req.body.event3, req.body.event4]
    
    await SetEventsForUser(await GetActiveUser(), subscriptions[0], subscriptions[1], subscriptions[2], subscriptions[3])
    console.log(subscriptions)
    res.redirect("/events.html")
    
});
  const port = 5502;
  
  app.listen(port, () => {
    console.log(`Server running on port${port}`);
  });