import React, {  useContext, useEffect, useState } from 'react';

import Heart from '../../assets/heart.png';
import './Post.css';
import { getProducts } from '../../Firebase/config';
import {  postContext } from '../../Store/PostContext';
import { useNavigate } from 'react-router-dom';


const  Posts=()=> {
  
  const [products,setProducts]=useState([])
 

  const {setPostDetails}=useContext(postContext)

  
 
    
  const navigate=useNavigate()

  useEffect(()=>{

    const result= getProducts()
    
    result.then((resp)=>{
      console.log('result:',resp)
      setProducts(resp)
    })

    
    
  },[])

  
    
    
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span className='headingSpan'>More on Cars</span>
          <span>View more</span>
        </div>
        <div className="cards">
         { 
          products?.map((item)=>{
            if(item.category==='car')
            return(
              <div
            className="card"
            onClick={()=>{
              setPostDetails(item)
              navigate('/view')
            }}
          >
            <div className="favorite">
              <img className='heart' src={Heart} alt="" />
            </div>
            <div className="image">
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {item.price}</p>
              <span className="kilometer">{item.category}</span>
              <p className="name"> {item.name}</p>
            </div>
            <div className="date">
              <span>{item.createdAt}</span>
            </div>
          </div>
            )
          })
         }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span >Fresh recommendations</span>
          <span className='extra'>View more</span>
        </div>
        <div className="cards">
         {products?.map((item)=>{
          if(item.category!=='car')
          return(
            <div onClick={()=>{
              setPostDetails(item)
              navigate('/view')
            }} className="card">
            <div className="favorite">
              <img className='heart' src={Heart} alt="" />
            </div>
            <div className="image">
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {item.price}</p>
              <span className="kilometer">{item.category}</span>
              <p className="name"> {item.name}</p>
            </div>
            <div className="date">
              <span>{item.createdAt}</span>
            </div>
          </div>
          )
         }) }
        </div>
      </div>
    </div>
  );
}

export default Posts;
