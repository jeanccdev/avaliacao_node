import { Cerveja } from '../models/Cerveja.js'

export const getCervejas = async (req, res) => {
    try {
        const cervejas = await Cerveja.findAll()
        res.status(200).send({ success: true, data: cervejas })
    } catch (error) {
        res.status(500).send({ success: false })
    }
}

export const getIdCerveja = async (req, res) => {
    try {
        const { cervejaId } = req.params
        const cerveja = await Cerveja.findByPk(cervejaId)
        res.status(200).send({ success: true, data: cerveja })
    } catch (error) {
        res.status(500).send({ success: false })
    }
}

export const postCerveja = async (req, res) => {
    try {
        const data = req.body
        const cerveja = await Cerveja.create(data)
        res.status(200).send({ success: true, data: cerveja })
    } catch (error) {
        res.status(500).send({ success: false })
    }
}

export const putCerveja = async (req, res) => {
    try {
        const { cervejaId } = req.params
        const data = req.body
        await Cerveja.update(data, {
            where: {
                id: cervejaId
            }
        })
        res.status(200).send({ success: true })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false })
    }
}

export const deleteCerveja = async (req, res) => {
    try {
        const { cervejaId } = req.params
        const cerveja = await Cerveja.destroy({
            where: {
                id: cervejaId
            }
        })
        res.status(200).send({ success: true, data: cerveja })
    } catch (error) {
        res.status(500).send({ success: false })
    }
}