const person = require('../controllers/person_controller')
const router =require('express').Router()
router.post('/create',person.add)
router.get('/find/:id',person.find)
router.put('/updateperson/:id',person.updateperson)
router.put('/updatephone/:id',person.updatephone)
router.delete('/deleteperson/:id',person.removeperson)
router.delete('/deletephone/:id',person.removephone)

module.exports = router