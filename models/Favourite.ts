const mongoose = require('mongoose');
const FavouriteSchema = new mongoose.Schema({
    author_name: {
        type: String,
    },
    author_image: {
        type: String,
    },
    item_image: {
        type: String,
    },
    item_name: {
        type: String,
    },
    price: {
        type: Number,
    },
    currency: {
        type: String,
    },
    likes_number: {
        type: Number,
    },
    comments_number: {
        type: Number,
    },
    item_description: {
        type: String,
    },
    tags: {
        type: Array,
    },
    is_favourite: {
        type: Boolean,
    },
});

module.exports = mongoose.models.Favourite || mongoose.model('Favourite', FavouriteSchema);