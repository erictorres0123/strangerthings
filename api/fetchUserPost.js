const cohort = '2209-ftb-et-web-am';

export const fetchUserPosts = () => { fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/me', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TOKEN_STRING_HERE'
  },
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}