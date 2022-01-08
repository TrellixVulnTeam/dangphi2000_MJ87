const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Product1 = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    gia: { type: String },
    slug: { type: String, slug: "name" }



}, {
    timestamps: true,


});

module.exports = mongoose.model('Product1', Product1);