const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true
    },
    totalCookTime:{
        type: Number,
        required:true
    },
    prepTime:{
        type: Number,
        required:true
    },
    cookTime:{
        type: Number,
        required:true
    },
    serves: {
        type: String,
        required: true
    },
    taste: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    difficuiltyLevel: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    meals: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    category : {
        type : [mongoose.Schema.ObjectId],
        ref : 'category'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('recipe',recipeSchema)