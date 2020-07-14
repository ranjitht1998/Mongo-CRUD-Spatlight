const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ranjith:ranjith@cluster0.g34bs.mongodb.net/Statlight?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (!err) {
            console.log("node connected with db");
        } else {
            console.log("error in connection");
        }
    })

module.exports = mongoose;