import React, {useState} from "react";

export const ViewPost = (props) => {
 const posts = props.posts;
    return (
    <div>
        <h1>Posts</h1>
        {posts.map((post) =>  {
            return  <div> 
                <div> {post.title}</div>
                 </div>;
        
        })}
    </div>
  );
};

