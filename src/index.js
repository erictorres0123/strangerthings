import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Link} from 'react-router-dom';
import { fetchPost } from '../api/fetchPosts';
import { ViewPost } from '../components/ViewPost';
import { ViewLogin } from '../components/ViewLogin';
import { ViewRegister } from '../components/ViewRegister';


const App = ()=> {
  const [posts, setPosts] = useState([]);  // variable 'posts' has API posts from fetch.js
  const [token, setToken] = useState('');
  
  
    
  useEffect(()=> {
  fetchPost(setPosts);
  }, []);

const logout = () => {
  localStorage.clear();
}

  return (
    <div>
      <h1>Strangers Things</h1>
      <button onClick={logout}>Log Out</button>
      <nav> 
        <Link to='/posts'>Posts ({posts.length})</Link>
        <Link to='/login'>Login </Link>
        <Link to='/register'>Register</Link>
      </nav>
      <Routes>
        <Route path='/posts' element= {<ViewPost posts = {posts}/>}/>
        <Route path='/login' element={ <ViewLogin setToken = {setToken}/>}/> 
        <Route path='/register' element={ <ViewRegister setToken = {setToken}/>}/> 
      </Routes> 
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
