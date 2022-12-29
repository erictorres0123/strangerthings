import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Link} from 'react-router-dom';
import { fetchPost } from '../api/fetchposts';
import { ViewPost } from '../components/ViewPost';
import { fetchLogin } from '../api/fetchlogin';
import { ViewLogin } from '../components/ViewLogin';
 
const App = ()=> {
  const [posts, setPosts] = useState([]);  // variable 'posts' has API posts from fetch.js
  const [token, setToken] = useState('');
    
  
    
  useEffect(()=> {
  fetchPost(setPosts);
  }, []);



  console.log(posts); // shows posts in console
  return (
    <div>
      <h1>Strangers Things</h1>
      <nav> 
        <Link to='/posts'>Posts ({posts.length})</Link>
        <Link to='/login'>Login </Link>
        <Link to='/register'>Register</Link>
      </nav>
      <Routes>
        <Route path='/posts' element= {<ViewPost posts = {posts}/>}/>
        <Route path='/login' element={ <ViewLogin setToken = {setToken}/>}/> 
        <Route path='/register' element={ <div>Register</div>} /> 
      </Routes> 
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
