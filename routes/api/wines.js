const router = require("express").Router();
const wineController = require("../../../dynamicwine/controllers/wineController");

router.route("/")
  .get(wineController.wineFindAll)
  .post(wineController.wineCreate);

router
  .route("/:id")
  .get(wineController.wineFindById)
  .put(wineController.wineUpdate)
  .delete(wineController.wineRemove);

module.exports = router;
