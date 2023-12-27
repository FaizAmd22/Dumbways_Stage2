import * as express from 'express'
import TodoControllers from '../controllers/TodoControllers'

const router = express.Router()

router.get('/provinces', TodoControllers.showProvinsi)
router.post('/provinces', TodoControllers.createProvinsi)
router.put('/provinces/:id', TodoControllers.editProvince)
router.delete('/provinces/:id', TodoControllers.deleteProvince)

export default router