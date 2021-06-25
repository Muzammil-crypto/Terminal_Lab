const Product = require('../models/Product');
var arr=[];

exports.getOneFaculty = async(req, res, next) => {
  try {
    const Faculties = await Product.findById(req.params.id);
    console.log('single from update')
    res.status(200).json({
      success: "success",
      Faculties
    });
  } catch (error) {
    res.json(error)
  
  }
}

exports.getFaculty = async(req, res, next) => {
  try {
    const Faculties = await Product.find();
    res.status(200).json({
      success: "success",
      Faculties,
    });
  } catch (error) {
    res.json(error)
  
  }
}
exports.postFaculty = async(req, res, next) => {
  console.log('req.body')
  console.log(req.body);
  try {
  //   const {name,email,gender,course_code,phone_number,street_address,city,country}=req.body;
  // const faculty={
  //   id,
  //   name,
  //   email,
  //   gender,
  //   address:{
  //     street_address,
  //     city,
  //     country
  //   },
  //   course_code,
  //   phone_number
  // }
  // if(id){
  //   arr.push(newFaculty)
  //   return res.json({
  //       success: "success",
  //       arr,
  //     });
  // }else {
  //   return res.json({
  //     msg:"id field is compulsory"
  //   })
  // }
  
  
	const newFaculty = await Product.create(req.body);
  res.redirect('/');
  } catch (error) {
    res.json(error)
  
  }
}
exports.deleteFaculty = async(req, res, next) => {
  try {
    const doc = await Faculty.findByIdAndDelete(req.params.id);
    if (!doc) {
      return res.send('No Document found with that Id');
    }
    // i = arr.findIndex((obj => obj.id == req.params.id));
    // arr.splice(i,1);
    res.status(204).json({
      status: 'success',
      data: 'Deleted successfully'
    });
  } catch (error) {
    res.json(error)
  
  }
}

exports.updateFaculty = async(req, res, next) => {
  console.log('updated call')
  console.log(req.params.id)

  try {
  const updatedDoc = await Product.findByIdAndUpdate(req.params.id, {
"rating":req.body.rating
  });
    if (!updatedDoc) {
      return res.send('No Document found with that Id');
    }
    res.status(200).json({
      status: 'success',
      msg:'successfully updated'
    });
  } catch (error) {
    res.json(error);
  }
}
exports.addtocart= async(req, res, next) => {
  // console.log(req.params.id)
  try {
    const doc = await Product.findById(req.params.id);
    const docs = await Product.find();
    if (!doc) {
      return res.send('No Document found with that Id');
    }
    if(docs.length<=arr.length){
      return res.redirect('/cart');
    }
    arr.push(doc)
    // i = arr.findIndex((obj => obj.id == req.params.id));
    // arr.splice(i,1);
    console.log(arr)
    res.status(204).json({
      status: 'success',
      Faculties:arr
    });
  } catch (error) {
    res.json(error)
  
  }
}
exports.cart= async(req, res, next) => {
  var price =0;
  try {

    console.log('helo')
    // i = arr.findIndex((obj => obj.id == req.params.id));
    // arr.splice(i,1);
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
      price = price+arr[i].price;
        
    }

    res.status(200).json({
      status: 'success',
      Faculties:arr,
      price
    });
  } catch (error) {
    res.json(error)
  
  }
}