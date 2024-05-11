import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { postContext } from '../../Store/PostContext';
import { viewUser } from '../../Firebase/config';
import backArrow from '../../assets/back_arrow_icon.png'
import { useNavigate } from 'react-router-dom';
const View=()=> {

  const [userDetails,setUserDetails]=useState([]);
  const {postDetails}=useContext(postContext)
  const navigate=useNavigate()
  useEffect(()=>{
    const {userId}=postDetails
    const result=viewUser(userId)
    result.then((response)=>{
      setUserDetails(response)
      console.log('second:',response)
    })
  },[])
  return (
    <div className="viewParentDiv">
      <img onClick={()=>navigate('/')} className='arrow' src={backArrow} alt="" />
      <div className="imageShowDiv">
        <img
          src={postDetails?.imageUrl}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?.price} </p>
          <span>{postDetails?.name}</span>
          <p>{postDetails?.category}</p>
          <span>{postDetails?.createdAt}</span>
        </div>
        {userDetails&&<div className="contactDetails">
          <p>Seller details</p>
          <br/>
          <p>{userDetails[0]?.name}</p>
          <p>{userDetails[0]?.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
