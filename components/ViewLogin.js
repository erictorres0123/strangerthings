import React, {useState} from "react";
import { fetchLogin } from "../api/fetchLogin";



export const ViewLogin = ({setToken}) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

return (

<div className="login"> 
<h1>Login</h1>

    <form onSubmit={async(ev) => { 
        try {
            ev.preventDefault();
            const token = await fetchLogin(username, password);
            setToken(token);
            const redirectposts = () => {
                window.location.href = '/dist/index.html#/posts';
            }
            redirectposts();
        } catch (error) {
            console.error(error);
        }
    }} >

<input
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          placeholder="password"
          type={'password'}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
    <button disabled ={!username || !password}>Log In</button>

    </form>
 </div>
)};