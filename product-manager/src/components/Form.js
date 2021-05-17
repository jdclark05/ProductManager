import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';

const Form = (props) => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const DomRender = () => {
        props.onRender('http://localhost:8000/form/allproducts');
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/form/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].value = "";
            alert(`Product has been submitted.. \n title: ${title} \n price: ${price} \n description: ${description}`)
            DomRender();
    }

    return (
        <div>
            <div className="productManagerDiv">
                <h1 className="headingTitle">Project Manager</h1>
                <p className="mottoMini" > submit your product here...</p>
            </div>
            <form className="formContainer" onSubmit={onSubmitHandler}>
                <p className="titleBlock">
                    <label className="labelBlock">Title</label><br/>
                    <input className="inputBlock" type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p className="titleBlock">
                    <label className="labelBlock" >Price:  $</label><br/>
                    <input className="inputBlock" type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p className="titleBlock">
                    <label className="labelBlock">Description</label><br/>
                    <input className="inputBlock" type="textarea" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <input className="formButton" type="submit"/>
            </form>
        </div>
    )
}

export default Form;