# Quiz Application.

## Running the Server

#### Start the server on PORT 9090. Ensure strict adherence to this port number.

## Project Overview

#### You are tasked with building an API for a Quiz Application. The project should include the following features.
- Register And Login JWT use and cooike set.
- CURD Operation performance.
- Calculate A Score.

## Follow these instructions strictly.

### Implement in MVC Structure.
#### Database Connection.
1. Create a 'configs' folder. Inside this folder, create a file named 'db.js'. Write logic to connect to MongoDB using an online database such as MongoDB Atlas.

#### Database Schema Design.

2. Create a 'models' folder
    - create a file named 'user.Schema.js' with the following schema.
```
username,
email,
password,
role:{
    type:String,
    require:true,
    enum:['User','Teacher'],
    default:'User'
}
```

- create a file named 'quize.Schema.js' with the following schema.
```
title
description,
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
```

- create a file named 'UserSubmisionQuize.Schema.Schema.js' with the following schema.
```
userId: { type: String, required: true }, // Replace with your user management logic
quizId: { type: mongoose.Schema.Types.ObjectId, ref:'Quize', required: true }, // Your Quize Schema Id
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
```

## Sign Up and Login
### Sign Up - POST route

- Endpoint: Create a POST route at ```/user/register```.
- After a successful Sign, set cookies in the browser with the user's Token.
- Within the form, provide the following input fields with corresponding IDs:
    - username
    - password
    - email
    - role

### Login - POST route

- Create a POST route named ```/user/login```.
- Within the form, provide the following input fields with corresponding IDs:
    - email
    - password
- After a successful login, set cookies in the browser with the user's Token.

## Quiz API EndPoint.

### GET route :- All Quiz Show
1. Create a GET route at ```/quize/show```.

### GET route :- Single Quiz Show
1. Create a GET route at ```/quize/show/:id```

### POST route :- Create Quiz.

1. Create a Post route at ```/quize/create```.
2. send a response containing all available event.

### POST route :- Submit Quiz.

1. Create a Post route at ```/Product/submit```.
2. send a response containing all available event.

## Routes

### User / Auth.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```POST```    | ```/user/register```   | User Register .   |
| ```POST```    | ```/user/login```   | User Login..   |

### Quiz API EndPoint.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```GET```    | ```/quize/show```   | Quiz Fetch all items.   |
| ```GET```    | ```/quize/show/:id```   | Single Quiz Fetch.   |
| ```POST```    | ```/quize/create```   | Quiz Create .   |
| ```POST```    | ```/Product/submit```   | Quiz Submit..   |

## Setup and Installation

### Steps:
1. Clone the repository.
```  git clone <repository-url> ```

2. Install dependencies.
``` npm install ```

3. Create a .env file and add your MongoDB connection string.
```
PORT=9090
MONGODB_URL=mongodb+srv://QuizApplication:QuizApplication@cluster0.dgwjmgh.mongodb.net/QuizApplication?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=MY_JWT_SECRET_QUIZ_APPLICATION

```

4. Start the server:
``` npm start ```


