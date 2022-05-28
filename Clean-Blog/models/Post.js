const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const BlogSchema = new Schema({
    title: String,
    detail: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', BlogSchema);

module.exports = Post;