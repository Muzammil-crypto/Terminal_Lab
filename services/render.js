const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    console.log(req.headers.host);
    axios.get(`https://safyanterminal.herokuapp.com/api`)
        .then(function(response){
            res.render('index', { users : response.data.Faculties });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.cartRoutes = (req, res) => {
    // Make a get request to /api/users
   axios.get(`https://safyanterminal.herokuapp.com/api/getcart`)
   .then(function(response){
            console.log(response.data.price)
            res.render('cart', { users : response.data.Faculties,price:response.data.price });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get(`https://safyanterminal.herokuapp.com/api/${req.query.id }`)
        .then(function(userdata){
            console.log(userdata.data)
            res.render("update_user", { user : userdata.data.Faculties})
        })
        .catch(err =>{
            res.send(err);
        })
}