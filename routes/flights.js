import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

router.get("/", flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)

router.get("/:id", flightsCtrl.show)

// router.get("/:id/edit", flightsCtrl.edit)

router.delete("/:id", flightsCtrl.delete)

// router.put("/:id", flightsCtrl.update)

export {
	router
}