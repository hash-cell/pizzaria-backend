import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '../controllers/CreateUserController';
import { AuthUserController } from '../controllers/AuthUserController';
import { DetailUserController } from '../controllers/DetailUserController';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { CreateCategoryController } from '../controllers/CreateCategoryController';
import { CreateProductController } from '../controllers/CreateProductController';
import uploadConfig from '../config/multer';
import { ListByCategoryController } from '../controllers/ListByCategoryController';
import { AddItemController } from '../controllers/AddItemController';
import { CreateOrderController } from '../controllers/CreateOrderController';
import { RemoveItemController } from '../controllers/RemoveItemController';
import { SendOrderController } from '../controllers/SendOrderController';
import { ListOrdersController } from '../controllers/ListOrderController';
import { DetailOrderController } from '../controllers/DetailOrderController';
import { FinishOrderController } from '../controllers/FinishOrderController';

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const detailUserController = new DetailUserController();
const createCategoryController = new CreateCategoryController();
const createProductController = new CreateProductController();
const listByCategoryController = new ListByCategoryController();
const createOrderController = new CreateOrderController();
const addItemController = new AddItemController();
const removeItemController = new RemoveItemController();
const sendOrderController = new SendOrderController();
const listOrdersController = new ListOrdersController();
const detailOrderController = new DetailOrderController();
const finishOrderController = new FinishOrderController();

router.post('/users', createUserController.handle);
router.post('/sessions', authUserController.handle);
router.post('/category', isAuthenticated, createCategoryController.handle)
router.post('/product', isAuthenticated, upload.single('file'), createProductController.handle);
router.post('/order', isAuthenticated, createOrderController.handle);
router.post('/order/add', isAuthenticated, addItemController.handle);

router.put('/order/send', isAuthenticated, sendOrderController.handle);
router.put('/order/finish', isAuthenticated, finishOrderController.handle);

router.delete('/order/remove', isAuthenticated, removeItemController.handle);

router.get('/order/detail', isAuthenticated, detailOrderController.handle);
router.get('/orders', isAuthenticated, listOrdersController.handle);
router.get('/me', isAuthenticated, detailUserController.handle);
router.get('/category/product', isAuthenticated, listByCategoryController.handle);

export { router };