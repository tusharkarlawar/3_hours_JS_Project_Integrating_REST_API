let val = document.addEventListener('submit', productDetails);
let totalPriceSpan = document.getElementById('totalPrice');

let totalPrice =0;
async function productDetails(event) {
     event.preventDefault();
    let selling = document.getElementById('selling').value;
    let product = document.getElementById('product').value;

    let obj = {
        sellingPrice: selling,
        productName: product
    }

    try {
        const response = await axios.post("https://crudcrud.com/api/11b9924e18784daf981e7a42d8cb72e1/admin", obj)

        showPoductOnScreen(response.data)
        updateProduct(response.data.sellingPrice);

    }

    catch (error) {
        console.log(error);
    }

}

window.addEventListener('DOMContentLoaded', async () => {
    const respnse = await axios.get("https://crudcrud.com/api/11b9924e18784daf981e7a42d8cb72e1/admin")
    try 
    {
        for (let i = 0; i < respnse.data.length; i++) {
            showPoductOnScreen(respnse.data[i])
            updateProduct(respnse.data[i].sellingPrice);
        }
    }

    catch (err) {
        console.log(err)
    }

})



function showPoductOnScreen(obj) {
    let parentelem = document.getElementById('outputList');
    let childelem = document.createElement('li');
    //showData.style.textAlign='center'


    childelem.textContent = obj.sellingPrice + '---' + obj.productName;
    let btn = document.createElement('button');
    btn.textContent = 'delete button';
    btn.style.marginLeft = '20px'
    

    btn.onclick = async () => {
        await axios.delete(`https://crudcrud.com/api/11b9924e18784daf981e7a42d8cb72e1/admin/${obj._id}`)
        try 
        {
            parentelem.removeChild(childelem);
            updateProduct(-obj.sellingPrice);
            
        }

        catch (err) {
            console.log(err)
        }

    }

    parentelem.appendChild(childelem);
    childelem.appendChild(btn);
}


function updateProduct(val) {
    
    totalPrice += parseInt(val);
    totalPriceSpan.textContent = totalPrice;

}