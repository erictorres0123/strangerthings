const cohort = '2209-ftb-et-web-am';


export const fetchLogin = async () => { fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/login`)
  
  .then(response => response.json())
  .then(result => {
   setPosts(result.data.login); //setting posts, storing API login into 'login' => index.js
  })
  .catch(console.error);
 
};