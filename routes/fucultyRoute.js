const express = require('express');

const facultyRouter = express.Router();

const {getFaculty,postFaculty,deleteFaculty,updateFaculty,getOneFaculty,cart,addtocart}=require('../controller/facultyController')

facultyRouter.route('/').get(getFaculty);
facultyRouter.route('/').post(postFaculty);
facultyRouter.route('/getcart').get(cart);
facultyRouter.route('/:id').get(getOneFaculty);
facultyRouter.route('/:id').put(updateFaculty);
facultyRouter.route('/:id').delete(deleteFaculty);
facultyRouter.route('/cart/:id').get(addtocart);



module.exports = facultyRouter;