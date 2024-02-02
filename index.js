import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import sequelize from './db.js'
import { Cerveja } from './models/Cerveja.js'
import cervejaRouter from './routes/cervejaRouter.js'
import authRouter from './routes/authRouter.js'
import { User } from './models/User.js'
import { verifyToken } from './controllers/authController.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/cervejas', verifyToken, cervejaRouter)

sequelize.sync({
    force: true
})
    .then(async () => {
        await User.create({
            username: 'admin',
            password: 'admin',
            permissions: ''
        })
        await Cerveja.create({
            nome: 'Heineken',
            abv: 4.5,
            tipo: 'Lager',
            nacionalidade: 'Holanda'
        })
        await Cerveja.create({
            nome: 'Corona',
            abv: 5.2,
            tipo: 'Pielsen',
            nacionalidade: 'México'
        })
        await Cerveja.create({
            nome: 'Patagônia',
            abv: 4.2,
            tipo: 'Amber Ale',
            nacionalidade: 'Argentina'
        })
        await Cerveja.create({
            nome: "Saint'Beer",
            abv: 3.5,
            tipo: 'IPA',
            nacionalidade: 'Brasil'
        })
        await Cerveja.create({
            nome: 'Duff Beer',
            abv: 3.5,
            tipo: 'Pielsen',
            nacionalidade: 'EUA'
        })
        await Cerveja.create({
            nome: 'Coruja',
            abv: 3.5,
            tipo: 'Lager',
            nacionalidade: 'Brasil'
        })
        await Cerveja.create({
            nome: 'Brugse Zot',
            abv: 6.2,
            tipo: 'IPA',
            nacionalidade: 'Bélgica'
        })
    })
    .then(() => {
        console.clear()
        app.listen(3000, () => {
            console.log('Server running on port 3000')
        })
    })