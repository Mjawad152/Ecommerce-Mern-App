import React, { useState } from 'react'
import { userdata } from '../Services/api';
import { Link } from 'react-router-dom';


export default function UserAdd() {
    const [proData,setProData] = useState({
        productName:"",
        productDescription:"",
        productPrice:"",
        productUrl:"",
    })
    const handleChange = (e) => {
      setProData({ ...proData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
     
      if (!proData.productName || !proData.productDescription || !proData.productPrice || !proData.productUrl) {
        alert('Please fill in all fields');
        return;

      }else{
        userdata(proData);
      }
  
   
     
    };



  return (
    <div >
    <div className='col-md-6  mt-4 container'>
      <h1 className='text-white text-center'>Add Products</h1>
        <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
        <div >
  <label for="validationTooltip01" class="mb-2 text-white">Product Name</label>
    <input  class="form-control mb-3" type="String"  onChange={handleChange} name='productName' value={proData.productName}/>
  </div>
  <div >
  <label for="validationTooltip01" class="mb-2 text-white">Description</label>
    <input  class="form-control mb-3" type="description" onChange={handleChange} name='productDescription' value={proData.productDescription} />
  </div>
  <div>
  <label for="validationTooltip01" class="mb-2 text-white">Price:</label>
  <input  class="form-control mb-3" type="number" onChange={handleChange} name='productPrice' value={proData.productPrice} />
  </div>
  <div>
  <label for="validationTooltip01" class="mb-2 text-white">Image(URL)</label>
  <input  class="form-control mb-3" type="String" onChange={handleChange} name='productUrl' value={proData.productUrl} />
  </div>
  <div class="col-12">
    <button class="btn btn-primary " type="submit"  >Add Product</button>
      <Link to="/Products" class="btn btn-success" style={{marginLeft:"2rem"}}>View Products</Link>
  </div>
</form>



    </div>
    <div style={{display:"flex",marginTop:"0px"}}>
  
    </div>
   
    </div>
  )
}
