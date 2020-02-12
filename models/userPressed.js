const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userPressedSchema = new Schema({
    _id: Number,
    pressedList: [
        {
            _id: Number,
            control: String,
            slotId: Number,
            userName: String
        }
    ]
    }
);
module.exports = mongoose.model('UserPressed', userPressedSchema);
