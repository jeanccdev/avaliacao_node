import express from 'express'
import { getCervejas, getIdCerveja, postCerveja, putCerveja, deleteCerveja } from '../controllers/cervejaController.js'

const router = express.Router()

router.get('/', getCervejas)
router.get('/:cervejaId', getIdCerveja)
router.post('/', postCerveja)
router.put('/:cervejaId', putCerveja)
router.delete('/:cervejaId', deleteCerveja)

export default router