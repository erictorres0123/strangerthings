import React, {useState} from "react";
import { fetchPost } from "../api/fetchCreate";

export const CreatePost = () => {

    const [newPost, setCreatePost] = useState('')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState([]);

    return (
        <div>
<h1>New Post</h1>
<form onSubmit={async(ev) => { 
        try {
            ev.preventDefault();
            const newPost = await fetchPost(title, description, price, willDeliver);
            newPost(setCreatePost); 
         } catch (error) {
            console.error(error);
        }
}}>
    <input placeholder="title" value = {title} 
     onChange={(ev) => setTitle(ev.target.value)}
    ></input>

    <input placeholder="description" value={description}
     onChange={(ev) => setDescription(ev.target.value)}
    ></input>

    <input placeholder="price" value={price}
     onChange={(ev) => setPrice(ev.target.value)}
    ></input>

    <label> Will Deliver?</label>
    <input type= 'checkbox' id="willDeliver" name="willDeliver" value={willDeliver}
     onChange={(ev) => setWillDeliver(ev.target.value)}
    ></input>
    

<button disabled ={!title || !description || !price } >Create Post</button>

</form>
        </div>
    )

}