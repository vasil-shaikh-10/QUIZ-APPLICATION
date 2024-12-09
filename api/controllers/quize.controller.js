const Quize = require("../models/quize.Schema");
const QuizSubmission = require("../models/UserSubmisionQuize.Schema");

const CreateQuize = async(req,res)=>{
    try {
        let {title,description,questions} = req.body;
        
        if (!title || !description || !questions || questions.length === 0) {
            return res.status(400).json({ message: "All fields are required and questions must not be empty" });
        }
        let QuizeCreate = new Quize({
            title,description,questions
        })
        await QuizeCreate.save()
        res.status(201).json({ message: "Quiz added successfully", quiz: QuizeCreate });
    } catch (error) {
        console.log("Error in Create Quize Controller :- ",error.message)
        res.status(500).json({message:"Internal Error :- ",error})
    }
}

const QuizeById = async(req,res) =>{
    let {id} = req.params;
    try {
        let Data = await Quize.findById(id)

        if(!Data){
            return res.status(400).json({ message: "No Data Found..." });
        }
        res.status(201).json({success:true,Data:Data})
    } catch (error) {
        console.log("Error in QuizeById Controller :- ",error.message)
        res.status(500).json({message:"Internal Error :- ",error})
    }
}

const SubmitQuize = async(req,res)=>{
    try {
        const { quizId, answers } = req.body;

        let QuizeFind = await Quize.findById(quizId)
        if(!QuizeFind){
            return res.status(400).json({ message: "No Quize Found..." });
        }
        let score = 0;
        const detailedResults = [];
        QuizeFind.questions.forEach((question,index)=>{
            const UserAns = answers.find(a => a.questionText == question.questionText)

            if(UserAns){
                const correctOption = question.options.find(option => option.isCorrect);
                if (UserAns.selectedOption === correctOption.text) {
                    score++;
                    detailedResults.push({
                      questionText: question.questionText,
                      correct: true,
                      UserAns: UserAns.selectedOption,
                      correctAnswer: correctOption.text
                    });
                }
            }else{
                detailedResults.push({
                    questionText: question.questionText,
                    correct: false,
                    UserAns: UserAns.selectedOption,
                    correctAnswer: correctOption.text
                  });
            }
        })
        const newSubmission = new QuizSubmission({
            userId:req.user._id, // Replace this with your actual user ID from the session or token
            quizId,
            score,
            totalQuestions: QuizeFind.questions.length,
            detailedResults
          });
        await newSubmission.save();
        res.status(200).json({
            message: "Quiz submitted successfully",
            score,
            totalQuestions: QuizeFind.questions.length,
            detailedResults
        });
    } catch (error) {
        console.log("Error in SubmitQuize Controller :- ",error.message)
        res.status(500).json({message:"Internal Error :- ",error})
    }
}

const CreateShow = async(req,res) =>{
    try {
        let Data = await Quize.find()

        if(!Data){
            return res.status(400).json({ message: "No Data Found..." });
        }
        res.status(201).json({ Data: Data});
        
    } catch (error) {
        console.log("Error in CreateShow Controller :- ",error.message)
        res.status(500).json({message:"Internal Error :- ",error})
    }
}
module.exports = {CreateQuize,QuizeById,SubmitQuize,CreateShow}