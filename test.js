const mongoose = require('mongoose')

code = 'mongodb+srv://nalin:myface@clusterlottery.dif6m.mongodb.net/Lottery?retryWrites=true&w=majority'
constconParams = {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}

const connect = () => mongoose.connect
    (code, constconParams)
    .then(() => {
        console.log('coneted');
    })
    .catch((err) => {
        console.log(err);
    })



module.exports = connect

