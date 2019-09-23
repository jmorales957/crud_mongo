const router = require('express').Router()


const Usercontroller = require('../controllers/UserController')


router.get('/',Usercontroller.index)
router.post('/',Usercontroller.store)
router.post('/delete/',Usercontroller.delete)
router.post('/update/',Usercontroller.update)




module.exports = router
