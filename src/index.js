import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link} from 'react-router-dom';
import { fetchPost } from '../api/fetch';
import { ViewPost } from '../components/ViewPost';



const App = ()=> {
  const [posts, setPosts] = useState([]);
    // variable 'posts' has API posts from fetch.js
  useEffect(()=> {
  fetchPost(setPosts);

  }, []);

  console.log(posts); // shows posts in console
  
  return (
    <div>
      <h1>Strangers Things</h1>
      <nav> 
        <Link to='/posts'>Posts ({posts.length})</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
      <Routes>
        <Route path='/posts' element= {<ViewPost posts = {posts}/>}/>
        <Route path='/login' element={ <div>Login</div>} /> 
        <Route path='/register' element={ <div>Register</div>} /> 
      </Routes> 
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
