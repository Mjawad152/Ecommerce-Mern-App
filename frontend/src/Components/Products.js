import React, { useState, useEffect } from 'react';
import { IoMdStar } from 'react-icons/io';
import { getData } from '../Services/api';
import { Link } from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData(); 
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <div className='d-flex'>
        <h1 className='container text-white text-center'>
          Top This Week
        </h1>
        <Link className='btn btn-success' to="/UserAdd">Add New Products</Link>
      </div>

      <div className='container'>
        <div className='row'>
          {products.map((pro, index) => (
            <div key={index} className='col-md-3 mb-4' >
              <div class="card" style={{ width: "100%" ,}}>
                <img src={pro.productUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{pro.productName}</h5>
                  <p class="card-text">{pro.productDescription}</p>
                  <p class="card-text">{pro.productPrice}</p>
                  <a href="#" class="btn btn-primary">View Details</a>
                  <p>Reviews <IoStarSharp className='mb-1' style={{ marginLeft: "1rem" }} />(4.9)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
