import React from 'react';
import '../App.css';
import axios from 'axios';


const ProductsList = (props) => {

    const DomRender = () => {
        props.onRender('http://localhost:8000/form/allproducts');
    }

    const onClickHandler = (e, id) => {
        props.onIdGrab(id);
    }

    const onDeleteHandler = (e, id) => {
        console.log(id)
        e.preventDefault();
        axios.delete(`http://localhost:8000/form/${id}/delete`)
            .then(res => {
                DomRender();
            })
    }

    if(!props){
        return(
            <div className="d-flex align-items-center justify-content-center">
                <h1 style={{fontSize: '4rem', fontWeight: 'bold'}}>Loading...</h1>
                <h5>refresh the page to try again.</h5>
            </div> 
        )
    }
    return(
        <div className="dlContainer">
             <div className="dlBanner">
                 <h2 className="dlHeader">Products List</h2>
             </div>
             <div className="productInfo">
                <div>
                    {props.products.map((product, index) => {
                        return(
                            <div key={index} className="productsList">
                                <p className="bulletPoint">*</p>
                                <p onClick={ (e) => onClickHandler(e, product._id)} className="productName">'{product.title}'</p>
                                <button onClick={ (e) => onDeleteHandler(e, product._id)} id="dButton1">Delete</button>
                            </div>
                            
                        )
                    })} 
                </div>
            </div>
        </div>
    );
}

export default ProductsList;