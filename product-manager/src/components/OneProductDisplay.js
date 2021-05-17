import { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { navigate } from '@reach/router';


const OneProductDisplay = (props) => {
    const [product, setProduct] = useState("")

    const onClickHandler = (e, id) => {
        props.onEditNavigate(id);
    }

    const onDeleteHandler = (e, id) => {
        console.log(props._id)
        // e.preventDefault();
        axios.delete(`http://localhost:8000/form/${props.id}/delete`)
            .then(res => {
                navigate('/')
            })
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/form/${props.id}`)
            .then(res=> {
                setProduct(res.data.products)
            })
            .catch(err=>console.log("Error: ", err))
    }, [])
    console.log(product)
    if (!product){
        return(
            <div className="d-flex align-items-center justify-content-center">
                <h1 style={{fontSize: '4rem', fontWeight: 'bold'}}>Loading...</h1>
                <h5>refresh the page to try again.</h5>
            </div>  
        )
    } else {
    return(
            <div className="oPMainContainer">
                <div className="innerOPContainer">
                    {product.map((item, index) => {
                        return(
                            <div key={index} className="oPName">
                                <div className="oPName2">
                                    <h1 className="productName2">'{item.title}' </h1>
                                </div>
                                <div className="oPPrice">
                                    <h3 className="productPrice">Price: <p id="dollarAmount">${item.price}</p></h3>
                                </div>
                                <div className="oPDesc">
                                    <h3 className="productDesc">Product Description:</h3>
                                    <h3 id="description">'{item.description}</h3>
                                </div>
                                <div className="buttonHolder">
                                    <div className="editButton">
                                        <button id="eButton" onClick={ (e) => onClickHandler(e, item._id)}className="EditLink">Edit</button>
                                    </div>
                                    <div className="deleteButton">
                                    <button onClick={ (e) => onDeleteHandler(e, item._id)} id="dButton2" style={{ height: '50px', width: '150px'}}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })} 
                </div>
            </div>
        );
    }
}

export default OneProductDisplay;