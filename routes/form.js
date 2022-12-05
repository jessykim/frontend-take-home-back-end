import { Router } from 'express'
import * as formsCtrl from '../controllers/forms.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', formsCtrl.index)
router.post('/', formsCtrl.create)

export { router }