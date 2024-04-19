import React, { useEffect, useState } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import classes from './detail.module.css';
import axios from 'axios';
import { ProductUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader'

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [isLoading,setisLoading]=useState(false)
    useEffect(() => {
        setisLoading(true)
        axios.get(`${ProductUrl}/products/${productId}`)
            .then((res) => {
                setProduct(res.data);
            setisLoading(false)
            })
            .catch((err) => {
                console.log(err);
            setisLoading(false)
            });
    }, []); // Empty dependency array to run useEffect only once when component mounts

    return (
        <LayOut>
            {isLoading? (<Loader />):(
            <ProductCard product={product} 
                        flex={true}
                        renderDesc={true}
            />
            )}
        </LayOut>
    );
}

export default ProductDetails;
