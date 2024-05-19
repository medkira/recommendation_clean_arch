import { AuthMiddleware } from "@infra/http/middlewares/authentication/AuthMiddleware";
import { expressMiddlewareAdaptor } from "@main/adpaters/express-middleware-adapter";
import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { multerMiddlewareAdapter } from "@main/adpaters/multer-middleware-adapter";
import { makeAutoCompletePlaceSearchController } from "@main/factories/controllers/place/auto-complete-place-search/controller-factory";
import { makeCreatePlaceController } from "@main/factories/controllers/place/create-place/controller-factory";
import { makeDeletePlaceController } from "@main/factories/controllers/place/delete-place/controller-factory";
import { makeGetLatestPlacesController } from "@main/factories/controllers/place/get-latest-place/controller-factory";
import { makeGetPlaceByIdController } from "@main/factories/controllers/place/get-place-by-id/controller-factory";
import { makeGetPlaceByTypeController } from "@main/factories/controllers/place/get-place-by-type/controller-factory";
import { makeUpdatePlaceController } from "@main/factories/controllers/place/update-place/controller-factory";
import { makeValidatePlaceContributionByIdController } from "@main/factories/controllers/place/validate-place-contribution/controller-factory";
import { makeAddPlaceToFavouriteController } from "@main/factories/controllers/user/add-place-favourit/controller-factory";
import { makeGetFavouritePlacesByIdController } from "@main/factories/controllers/user/get-favourite-places-by-id/controller-factory";
import { makeRemovePlaceFromFavouriteController } from "@main/factories/controllers/user/remove-place-from-favourite/controller-factory";
import { makePostImageMulterMiddleware } from "@main/factories/middlewares/postImage-multer-middleware-factory copy";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";

export default (router: Router): void => {

  router.get("/place/page", expressRouterAdapter(makeGetLatestPlacesController()));

  router.get("/place/:id", expressRouterAdapter(makeGetPlaceByIdController()));

  router.get("/place/type/:type", expressRouterAdapter(makeGetPlaceByTypeController()));

  router.post("/place", authMiddleware, multerMiddlewareAdapter(makePostImageMulterMiddleware()),
    expressRouterAdapter(makeCreatePlaceController()));

  router.patch("/place/:id", authMiddleware, multerMiddlewareAdapter(makePostImageMulterMiddleware()), expressRouterAdapter(makeUpdatePlaceController()));

  router.delete("/place/:id", authMiddleware, expressRouterAdapter(makeDeletePlaceController()));

  router.patch('/place/favorites/add', authMiddleware, expressRouterAdapter(makeAddPlaceToFavouriteController()));

  router.patch('/place/favorites/remove', authMiddleware, expressRouterAdapter(makeRemovePlaceFromFavouriteController()));

  router.get('/place/favorites/get', authMiddleware, expressRouterAdapter(makeGetFavouritePlacesByIdController()));

  router.post('/place/validate/:id', authMiddleware, expressRouterAdapter(makeValidatePlaceContributionByIdController()));

  router.delete("/place/refuse/:id", authMiddleware, expressRouterAdapter(makeDeletePlaceController()));

  router.get("/place/search/autocomplete", expressRouterAdapter(makeAutoCompletePlaceSearchController()));

};
