const express = require('express')
const app = express()
dotenv = require('dotenv');
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const jobRouter = require('./routes/job')
const bookmarkRouter = require('./routes/bookmark')
// require('./connections/mongodb')


dotenv.config();
// process.evn.VARIABLE_NAME

mongoose.connect(process.env.MONGO_URL).
then(() => console.log('mongo connected successfully'))
.catch((err) => console.log(err));

app.use(express.json())
app.use('/api/', authRouter)
app.use('/api/user', userRouter)
app.use('/api/job', jobRouter)
app.use('/api/bookmarks', bookmarkRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${process.env.PORT}!`))