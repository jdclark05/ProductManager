import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { navigate } from '@reach/router';

const EditProduct = ( props ) => {
    console.log(props)
    const[product, setProduct] = useState('')
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/form/${props.id}`)
            .then(res=> {
                setProduct(res.data.products)
            })
            .catch(err=>console.log("Error: ", err))
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/form/${props.id}/update`, {
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        alert(`Product has been edited.. \n title: ${title} \n price: ${price} \n description: ${description}`)
        navigate(`/`);
            
    }
    if(!product){
        return(
            <div className="d-flex align-items-center justify-content-center">
            <h1 style={{fontSize: '4rem', fontWeight: 'bold'}}>Loading...</h1>
        </div>
        );
    } else {
        return (
            <div className="editMain">
                <div className="productManagerDiv">
                    <h1 className="headingTitle">Edit Product Form</h1>
                </div>
                {product.map((item, index) => {
                    return(
                    <form key={index} className="formContainer2" onSubmit={onSubmitHandler}>
                        <div className="titleBlock2">
                            <label key={index} className="labelBlock2">Title</label><br/>
                            <input className="titleInput2" name="title" placeholder={item.title} type="text" onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                        <div className="titleBlock2">
                            <label className="labelBlock2" >Price: $</label><br/>
                            <input onChange={(e)=>setPrice(e.target.value)} className="titleInput2" name="price" placeholder={item.price} type="text"/>
                        </div>
                        <div className="descBlock">
                            <label id="descText">Description</label> <br/>
                            <textarea onChange={(e)=>setDescription(e.target.value)} id="inputBlock2" name="description" placeholder={item.description} size="small" type="textarea" rows="10" columns="5"/>
                        </div>
                        <input id="submitEdit" onSubmit={onSubmitHandler} type="submit"/>
                    </form>
                    )
                })}     
            </div>
        );
    }
}

export default EditProduct;