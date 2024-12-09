const {Router} = require('express')
const { Register, Login } = require('../controllers/user.controller')

const UserRouter = Router()

UserRouter.post('/register',Register)
UserRouter.post('/login',Login)

module.exports = UserRouter