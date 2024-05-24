import { RestaurantCategory, sequelizeSession } from '../models/models.js'
const index = async function (req, res) {
  try {
    const restaurantCategories = await RestaurantCategory.findAll()
    res.json(restaurantCategories)
  } catch (err) {
    res.status(500).send(err)
  }
}

const newCategory = async function (req, res) {
  /*try {
   const newCategory = RestaurantCategory.build(req.body)
   const category = await newCategory.save()
   res.json(category)
  } catch (error) {
    res.status(500).send(error)
  }*/ const t = await sequelizeSession.transaction()
  const newCategory = RestaurantCategory.build(req.body)
  try {
    const category = await newCategory.save({ transaction: t })
    await t.commit()
    res.json(category)
  } catch (error) {
    await t.rollback()
    res.status(500).send(error)
  }
}
const RestaurantCategoryController = {
  index,
  newCategory
}
export default RestaurantCategoryController
