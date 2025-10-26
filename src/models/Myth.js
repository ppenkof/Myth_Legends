import {Schema, model, Types } from 'mongoose';

const mythSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Myth name is required!'],
        minLength: [2, 'Name must be at least 2 characters long!'],
    },

    origin:{
        type: String,
        required: [true, 'Myth origin is required!'],
        minLength: [3, 'Origin must be at least 3 characters long!'],
    },

    role: {
        type: String,
        required: [true, 'Myth role is required!'],
        minLength: [2, 'Role must be at least 2 characters long!'],
    },

    imageUrl: {
        type: String,
        required: [true, 'Myth image is required!'],
        match: [/^https?:\/\//, 'Image URL must start with http:// or https://'],
    },

    symbol: {
        type: String,
        required: [true, 'Myth symbol is required!'],
        minLength: [5, 'Symbol must be at least 5 characters long!'],
        maxLength: [40, 'Symbol must be at most 40 characters long!'],
    },

    era: {
        type: String,
        required: [true, 'Myth era is required!'],
        minLength: [5, 'Era must be at least 5 characters long!'],
        maxLength: [15, 'Era must be at most 15 characters long!'],
    },

    description:{
        type: String,
        required: [true, 'Myth description is required!'],
        minLength: [10, 'Description must be at least 10 characters long!'],
    },

    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },

    likedList:[{
        type: Types.ObjectId,
        ref: 'User',
    }]
},
{
    timestamps: true
});

const Myth = model('Myth', mythSchema);

export default Myth;