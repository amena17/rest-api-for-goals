const express = require('express')
const { getGoals, putGoals,postGoals,deleteGoals } = require('../controllers/goalController')

const router = express.Router()

router.route('/').get(getGoals).post(postGoals)

router.route('/:id').put(putGoals).delete(deleteGoals)

module.exports= router
