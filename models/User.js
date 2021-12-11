const mongoose = require('mongoose');
// const Schema = mongoose.Schema; - shown destructured below
const { Schema } = mongoose; // this basically says, the mongoose object has a property called schema, take that property and assign it to a new property called schema.

const userSchema = new Schema ({ //we can freely add or subtract properties here as we please
    googleId: String
})

//to load the schema into mongoose 
mongoose.model('users', userSchema);