const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); //the order of the require statements can result in errors inside the app (if this is below the nxt one for example)
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();


require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);

