const cohort = '2209-ftb-et-web-am';

//fetch post
export const fetchPost = async (setPosts) => { fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`)
  
  .then(response => response.json())
  .then(result => {
   setPosts(result.data.posts); //setting posts, storing API posts into 'posts' => index.js
  })
  .catch(console.error);
 
};
