//let products = []; // Array to store the product objects
let val = document.addEventListener('submit',upForm);
function upForm(event){
event.preventDefault();
 let selling = document.getElementById('selling').value;
let product = document.getElementById('product').value;
let obj={
    sellingPrice:selling,
    productName:product
  
}
axios.post("https://crudcrud.com/api/b5e6a369e61f45e3a5ca8095f5cafe03/admin",obj)
.then((response)=>{
    uiUpadte(response.data);
    //calculateTotalValue(); 
})
.catch((err)=>{
    console.log(err);
})
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/b5e6a369e61f45e3a5ca8095f5cafe03/admin")
    .then((response)=>{
       // products = response.data; // Store the retrieved products in the array
        for(let i = 0;i<response.data.length;i++){
            uiUpadte(response.data[i])
        }
        //calculateTotalValue(); 
    })
})
function uiUpadte(obj){
    let parentelem = document.getElementById('outputList');
    let childelem = document.createElement('li');
    
   
    childelem.textContent =obj.sellingPrice+'-'+obj.productName;
    let btn = document.createElement('button');
    btn.textContent='delete button';
    btn.onclick=()=>{
        axios.delete(`https://crudcrud.com/api/b5e6a369e61f45e3a5ca8095f5cafe03/admin/${obj._id}`)
        .then(()=>{
            parentelem.removeChild(childelem);
            //products = products.filter(product => product._id !== obj._id); // Remove the product from the array
            //calculateTotalValue(); // Update the total value
        })
        .catch((err)=>{
            console.log(err)
        }) 
    }
    
   
 
    
    parentelem.appendChild(childelem);
    childelem.appendChild(btn);
}

/*function calculateTotalValue() {
    let totalValue = 0;
    for (let i = 0; i < products.length; i++) {
      totalValue += parseInt(products[i].selling);
    }
    
}*/

