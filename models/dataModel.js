const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Data = mongoose.model('Data', dataSchema);
module.exports = Data;