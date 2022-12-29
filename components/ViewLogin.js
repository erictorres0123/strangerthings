import React, {useState} from "react";
import { fetchLogin } from "../api/fetchlogin";



export const ViewLogin = ({setToken}) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

return (
<div>
<h1>Login</h1>
{login.map((login) => {
return (
<div key = {login._id}> 
    <form onSubmit={async(ev) => { 
        try {
            ev.preventDefault();
            const token = await fetchLogin(username, password);
            setToken(token);
            const redirectposts = () => {
                window.location.href = '/posts';
            }
        } catch (error) {
            console.error(error);
        }
    }} >

    <input placeholder="username"></input>
    <input placeholder="password" type="password"></input>
    <button>Log In</button>

    </form>
 </div>
 );
 })}
</div>
)};