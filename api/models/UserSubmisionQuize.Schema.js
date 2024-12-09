const mongoose = require('mongoose')

const quizSubmissionSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // Replace with your user management logic
    quizId: { type: mongoose.Schema.Types.ObjectId, ref:'Quize', required: true },
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    detailedResults: [
      {
        questionText: { type: String, required: true },
        correct: { type: Boolean, required: true },
        UserAns: { type: String, required: true },
        correctAnswer: { type: String, required: true }
      }
    ],
    submittedAt: { type: Date, default: Date.now }
});

const QuizSubmission = mongoose.model('QuizSubmission', quizSubmissionSchema);

module.exports = QuizSubmission