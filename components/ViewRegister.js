import React, {useState} from "react";
import { fetchRegister } from "../api/fetchRegister";



export const ViewRegister = ({setToken}) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


return (
<div className="register">
<h1>Register</h1>
<form onSubmit={async(ev) => { 
        try {
            ev.preventDefault();
            const token = await fetchRegister(username, password);
            setToken(token);
            const redirectlogin = () => {
                window.location.href = '/dist/index.html#/posts';
            }
            redirectlogin(); //sends user to login after they have registered ^^^
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
    <button disabled ={!username || !password}>Login</button>
</form>
</div>
)};