import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Link} from 'react-router-dom';
import { fetchPost } from '../api/fetchposts';
import { ViewPost } from '../components/ViewPost';



const App = ()=> {
  const [posts, setPosts] = useState([]);
  const [login, setLogin] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

    // variable 'posts' has API posts from fetch.js
    
  useEffect(()=> {
  fetchPost(setPosts);
  fetchLogin(setLogin);
  }, []);

  console.log(posts); // shows posts in console
  console.log(login);
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
        <Route path='/login' element={ <ViewLogib login = {login}/>}/> 
        <Route path='/register' element={ <div>Register</div>} /> 
      </Routes> 
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
