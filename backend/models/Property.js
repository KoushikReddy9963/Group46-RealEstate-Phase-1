import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userEmail: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    propertyType: { type: String, enum: ['house', 'apartment', 'villa', 'land'], required: true },
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    area: { type: Number, required: true },
    amenities: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ['available', 'sold', 'pending'],
        default: 'available'
    }
});

export default mongoose.model('Property', propertySchema);
