const {Schema, model} = require('mongoose');

const iceCream = new Schema({
    title: {
      type: String,
      required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        amount: {
            type: Number,
            required: true
        },
        currency: {
            code: String,
            unit: String
        }
    }
});

module.exports = model('IceCream', iceCream);