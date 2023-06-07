   //let products = []; // Array to store the product objects

    let val = document.addEventListener('submit', productDetails);

    async function productDetails(event) {
      event.preventDefault();
      let selling = document.getElementById('selling').value;
      let product = document.getElementById('product').value;
      let obj = {
        sellingPrice: selling,
        productName: product
      };

      try {
        const response = await axios.post("https://crudcrud.com/api/c7d5165f4d184c428a1a2aeeebb0436d/admin", obj);
        showPoductOnScreen(response.data);
      //  calculateTotalValue(); // Update the total value
      } catch (error) {
        console.log(error);
      }
    }

    async function searchProducts() {
      try {
        const response = await axios.get("https://crudcrud.com/api/c7d5165f4d184c428a1a2aeeebb0436d/admin");
       // products = response.data; // Store the retrieved products in the array
        for (let i = 0; i < response.data.length; i++) {
            showPoductOnScreen(response.data[i]);
        }
       // calculateTotalValue(); // Update the total value
      } catch (error) {
        console.log(error);
      }
    }

    window.addEventListener('DOMContentLoaded', searchProducts);

    function showPoductOnScreen(obj) {
      let parentelem = document.getElementById('outputList');
      let childelem = document.createElement('li');
      childelem.textContent = obj.sellingPrice + '-' + obj.productName;
      let btn = document.createElement('button');
      btn.textContent = 'delete button';
      btn.onclick = async () => {
        try {
          await axios.delete(`https://crudcrud.com/api/c7d5165f4d184c428a1a2aeeebb0436d/admin/${obj._id}`);
          parentelem.removeChild(childelem);
         // products = products.filter(product => product._id !== obj._id); // Remove the product from the array
          calculateTotalValue(); // Update the total value
        } catch (error) {
          console.log(error);
        }
      };

      parentelem.appendChild(childelem);
      childelem.appendChild(btn);
    }

    
    /*function calculateTotalValue() {
        let totalValue = 0;
        for (let i = 0; i < products.length; i++) {
          totalValue += parseInt(products[i].selling);
        }
    }*/