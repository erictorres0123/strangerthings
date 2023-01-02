import React, { useEffect, useState } from "react";

const cohort = '2209-ftb-et-web-am';

export const fetchLogin = async (username, password) => { fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/login`, {   
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user: {
      username,
      password,
    },
  }),
}
)
.then((response) => response.json())
.then((result) => {
  if (!result.success) {
    throw result.error;
  }
  const token = result.data.token;
  window.localStorage.setItem('token', token);
  console.log('Login Successful')
  return token;
  
})
.catch((err) => console.log(err));
};