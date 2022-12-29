import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Link} from 'react-router-dom';
import { fetchPost } from '../api/fetchposts';
import { ViewPost } from '../components/ViewPost';
import { fetchLogin } from '../api/fetchlogin';


const App = ()=> {
<<<<<<< HEAD
  const [posts, setPosts] = useState([]);  // variable 'posts' has API posts from fetch.js
=======
  const [posts, setPosts] = useState([]);
  const [login, setLogin] = useState([]);
>>>>>>> 7d4369c821389f7d113003de10391a22295c1f92
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [token, setToken] = useState([]);
    
    
  useEffect(()=> {
  fetchPost(setPosts);
<<<<<<< HEAD
=======
  fetchLogin(setLogin);
>>>>>>> 7d4369c821389f7d113003de10391a22295c1f92
  }, []);
  useEffect(() => {
  fetchLogin(setLogin);
  }, [])


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
