import { RestaurantCategory } from '../models/models.js'


const checkHasSameName = async (req, res, next) => {
    const newRestCategory = await RestaurantCategory.findOne({where: {name: req.body.name}})
    try {
        if(newRestCategory){
            return res.status(409).send('There`s already a Category with that name')
        }
        return next()
    } catch (error) {
        return res.send(500).send()
    }
}

export default {checkHasSameName}