import { check } from 'express-validator'

const checkRestCategory = check('name').exists().isString().isLength({ min: 1, max: 50 }).trim()

export default {checkRestCategory}