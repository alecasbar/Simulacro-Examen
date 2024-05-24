import RestaurantCategoryController from '../controllers/RestaurantCategoryController.js'
import RestaurantCategoryValidation from '../controllers/validation/RestaurantCategoryValidation.js'
import RestaurantCategoryMiddleware from '../middlewares/RestaurantCategoryMiddleware.js'

import { hasRole, isLoggedIn } from '../middlewares/AuthMiddleware.js'
import { handleValidation } from '../middlewares/ValidationHandlingMiddleware.js'

const loadFileRoutes = function (app) {
  app.route('/restaurantCategories')
    .get(RestaurantCategoryController.index)
    .post(
      isLoggedIn,
      hasRole('owner'),
      RestaurantCategoryMiddleware.checkHasSameName,
      RestaurantCategoryValidation.checkRestCategory,
      handleValidation,
      RestaurantCategoryController.newCategory
    )
}

export default loadFileRoutes
