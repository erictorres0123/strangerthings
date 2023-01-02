const cohort = '2209-ftb-et-web-am';


export const fetchRegister = async (username, password) => { fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/register`)
fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username,
      password,
    }
  })
}).then(response => response.json())
  .then(result => {

    console.log(result);
  })
  .catch(console.error);
};

