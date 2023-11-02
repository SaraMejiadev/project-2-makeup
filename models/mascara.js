import mongoose from "mongoose";

const Schema = mongoose.Schema

let MascaraSchema = new Schema({
    brand: { type: String },
    name: { type: String },
    price: { type: Number },
    price_sign: { type: String },
    currency: { type: String },
    image_link: { type: String },
    product_link: { type: String },
    website_link: { type: String },
    description: { type: String },
    rating: { type: Number },
    category: { type: String },
    product_type: { type: String },
    tag_list: [{ type: String}],
});

export default mongoose.model("mascaras", MascaraSchema);