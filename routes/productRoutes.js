import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable"; //Formidable is a Node. js module for parsing form data, including multipart/form-data file upload.

const router = express.Router();

//routes with  end point
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get products with  end point

router.get("/get-product", getProductController); // end point

//single product with  end point

router.get("/get-product/:slug", getSingleProductController); // end point

//get photo with  end point

router.get("/product-photo/:pid", productPhotoController); // end point

//delete product with  end point

router.delete("/delete-product/:pid", deleteProductController); // end point

// update product routes with  end point
router.put(
  "/update-product/:pid", // url pattern
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//filter product with  end point

router.post("/product-filters", productFiltersController); // end point

//product count with  end point

router.get("/product-count", productCountController); // end point

//product per page with  end point

router.get("/product-list/:page", productListController); // end point

//search product with  end point

router.get("/search/:keyword", searchProductController); // end point

//similar product with  end point

router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product with  end point

router.get("/product-category/:slug", productCategoryController);

//payments routes with  end point
//token

router.get("/braintree/token", braintreeTokenController);

//payments with  end point

router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
