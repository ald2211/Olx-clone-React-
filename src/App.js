

import React, { useContext, useEffect } from 'react';
import './App.css';
import HomePage from './Pages/OlxHome';
import { Route ,Routes} from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/config';
import { authContext } from './Store/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePage from './Pages/CreatePage';
import ViewPost from './Pages/ViewPost';
import { Post } from './Store/PostContext';


const App=()=>{
   
   const {setUser}=useContext(authContext)
   
   useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      setUser(user)
    })
   },[])
    return (
      <div>
        <ToastContainer theme='dark' />
        <Post>
          
        <Routes>
          <Route path='/' element={ <HomePage />}/>
          <Route path='/loginOrSignup' element={<Signup />}/>
          <Route path='/create' element={<CreatePage />}/>
          <Route path='/view' element={<ViewPost />}/>
        </Routes>
       
        </Post>
      </div>
    );
}

export default App;

