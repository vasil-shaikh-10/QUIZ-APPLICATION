const mongoose = require('mongoose')

const QuizeSchema = new mongoose.Schema({
    "title": "String",
    "description": "String",
    "questions": [
      {
        "questionText": "String",
        "options": [
          {
            "text": "String",
            "isCorrect": "Boolean"
          }
        ],
        "explanation": "String"
      }
    ],
    "detailedResults":[{
      "questionText":String,
      "correct":Boolean,
      "UserAns":String,
      "correctAnswer":String
    }]
})

const Quize = mongoose.model('Quize',QuizeSchema)

module.exports = Quize