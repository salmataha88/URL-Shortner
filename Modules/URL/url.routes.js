import { Router } from 'express'
const router = Router()

import * as controller from './url.controller.js';

router.post('/shortcode', controller.generateShortCode)
router.get('/:shortcode', controller.getShortCode)


export default router
