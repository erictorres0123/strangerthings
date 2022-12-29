import React, {useState} from "react";

export const ViewLogin = (props) => {
const exchangeTokenForUser = props.exchangeTokenForUser;
const login = props.login;

return (
<div>
<h1>Login</h1>
{login.map((login) => {
return(
<div key = {login._id}> 
<button type="text"> </button>

 </div>
 );
 })}
</div>
)};