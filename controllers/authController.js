import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    try {
        const data = req.body
        const fetchUser = await User.findOne({
            where: {
                username: data.username,
                password: data.password
            }
        })
        if (!fetchUser) throw new Error('Usuário não encontrado')
        const token = jwt.sign({ permissions: data.permissions }, process.env.SECRET, { expiresIn: "1d" })
        res.send({ success: true, data: token })
    } catch (error) {
        console.error(error)
        res.status(500).send({ success: false, data: error.message })
    }
}

export const verifyToken = async (req, res, next) => {
    try {
        let token = req.headers.authorization
        token.includes('Bearer') ? token = token.split(' ').pop() : null
        if (token == null) { return res.status(401).send(false) }

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.status(403).send({ success: false, data: err })
            next()
        })
    } catch (error) {
        console.log(error)
        res.send({ success: false, data: error.message })
    }

}