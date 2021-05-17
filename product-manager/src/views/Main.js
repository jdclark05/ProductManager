import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import ProductsList from '../components/ProductsList';
import '../App.css';
import axios from 'axios';


const Main = (props) => {
    const [products, setProducts] = useState([]);

    const productId = ( data ) => {
        props.onOneProdNavigate( data );
    }

    const domUpdate = () => {
        axios.get('http://localhost:8000/form/allproducts')
        .then(res=> {
            setProducts(res.data.allProducts)
        })
        .catch(err=>console.log("Error: ", err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/form/allproducts')
            .then(res=> {
                setProducts(res.data.allProducts)
            })
            .catch(err=>console.log("Error: ", err))
    }, [])
    return (
        <div id="mainContainer">
            <Form onRender={ domUpdate }/>
            <ProductsList products={ products } onIdGrab = { productId } onRender={ domUpdate }/>
        </div>
    )
}

export default Main;

