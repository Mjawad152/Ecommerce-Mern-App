import React,{useState} from 'react'

export default function AddProducts() {


    // const [proData,setProData] = useState({
    //     productName:"",
    //     productDescription:"",
    //     productPrice:"",
    //     productUrl:"",
    // })
    // const handleChange=(e)=>{
    //     setProData({...proData,[e.target.name]:e.target.value});
    //     console.log(proData);
    //   }
    //   const handleClick = (e) => {
    //     e.preventDefault();
    //     addProduct(proData);
        
    // }
    const[add,setAdd] = useState({
        productName :"",
        category:"",
        description:"",
        imageUrl:"",
        price:"",
        
    })
    const handleClick = (e) =>{
        e.preventDefault();
        newProduct(add);

    }
    const handleChange = (e) => {
        setAdd({...add,[e.target.name]:e.target.value});
    }


  return (
    <div className='container'>
        <h1 className='text-center text-white' >Add Products</h1>
        <form class="row g-3">
  <div class="col-md-6">
    <label  class="form-label text-white">Product Name</label>
    <input type="text" class="form-control" id="inputEmail4" placeholder='Leather jaket' onChange={handleChange} name='productName'/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label text-white">Category</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder='jacket' name='category'/>
  </div>
  <div class="col-12">
    <label for="description" class="form-label text-white">Description</label>
    <input type="description" class="form-control" id="description" placeholder="describe about the products" name='description'/>
  </div>
 
  <div class="col-md-6">
    <label for="image" class="form-label text-white">Image URL</label>
    <input type="text" class="form-control" id="image" name='imageUrl'/>
  </div>
  <div class="col-md-6">
    <label for="price" class="form-label text-white">Price</label>
    <input type="text" class="form-control" id="price" placeholder='0.00$' name='price'/>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" onClick={handleClick}>App Product</button>
  </div>
</form>
    </div>
  )
}
