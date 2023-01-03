import React, {useState} from "react";
import { fetchPost } from "../api/fetchCreate";


export const CreatePost = ({token}) => {

   
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState([]);

    return (
        <div>
<h1>New Post</h1>
<form onSubmit={async(ev) => { 
    try { ev.preventDefault();
    fetchPost(token, title, description, price);
    console.log(token);
        } catch (error) {
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

    {/* <label> Will Deliver?</label>
    <input type= 'checkbox' id="willDeliver" name="willDeliver" value={willDeliver}
     onChange={(ev) => setWillDeliver(ev.target.value)}
    ></input> */}
    

<button disabled ={!title || !description || !price } >Create Post</button>

</form>
        </div>
    )

}