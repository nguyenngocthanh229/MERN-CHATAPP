const userRouter = require('./userRoutes')

const initRoutes = (app) => {
    app.use('/api/auth', userRouter)
}

module.exports = initRoutes