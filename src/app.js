import express from 'express'
import boardGames from '../routes/boardgames.routes'

const app = express();

//middlewares
app.use(express.json())

app.get('/', (req,res)=> {
    res.json('welcome')
})

//routes
app.use('/boardgame', boardGames)

export default app