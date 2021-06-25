// const axios=require('axios')

$("#add_user").submit(function(event){
    alert("product in database");
})

$("#update_user").submit(function(event){
    
    event.preventDefault();
    
    var unindexed_array = $(this).serializeArray();
    var data = {}
    
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
console.log(data)
//https://web-terminal-lab.herokuapp.com/


        axios.put(`https://web-terminal-lab.herokuapp.com/api/${data.id}`,{
            "rating":data.rating
        }).then(e=>e).catch(e=>e)


})

// if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        console.log(id)
        axios.get(`https://web-terminal-lab.herokuapp.com/api/cart/${id}`).then(e=>e).catch(e=>e)


        // if(confirm("Do you really want to add to cart")){
                alert("procut in cart");
        // }

    })
// }