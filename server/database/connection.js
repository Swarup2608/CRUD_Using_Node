const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const URI = process.env.MONGO;

mongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB