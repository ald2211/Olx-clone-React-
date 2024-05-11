import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { authContext } from '../../Store/Context';
import { imageUpload } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [name,setName]=useState('')
  const [category,setCategory]=useState('')  
  const [price,setPrice]=useState('')  
  const [image,setImage]=useState(null)  

  const navigate=useNavigate()

  const {User}=useContext(authContext)
  const handleSubmit=()=>{
    if(User===null){
      navigate('/loginOrSignup')
      return
    } 
    const result= imageUpload(image,name,category,price,User)
    if (result){
      
      navigate('/') 
    }

  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" 
            value={price}
              onChange={(e)=>setPrice(e.target.value)} />
            <br />
          <br />
          <img  width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
          
            <br />
            <input type="file"  onChange={(e)=>{setImage(e.target.files[0])}}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
