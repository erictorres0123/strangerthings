const cohort = '2209-ftb-et-web-am';


<<<<<<< HEAD
export const fetchLogin = async () => { fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/login`)
  
=======
export const fetchLogin = async () => { fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/login`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: 'username',
      password: 'password'
    }
  })
  }
)
>>>>>>> 7d4369c821389f7d113003de10391a22295c1f92
  .then(response => response.json())
  .then(result => {
   setPosts(result.data.login); //setting posts, storing API login into 'login' => index.js
  })
  .catch(console.error);
 
};