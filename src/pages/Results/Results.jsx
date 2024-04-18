import React,{useState,useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { ProductUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Product/ProductCard'
import classes from './Result.module.css';

function Results() {
  const [results,setResults]=useState([]);
  const {categoryName}=useParams();
  useEffect(()=>{
    axios.get(`${ProductUrl}/products/category/${categoryName}`)
    .then((res)=>{
      setResults(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  
  return (
    <LayOut>
      <section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p style={{padding:"30px"}}>Category/{categoryName}</p>
        <hr />
        <div className={classes.product_container}>
          {results?.map((product)=>(
            <ProductCard 
              key={product.id}
              product={product}
              />
          ))}
        </div>
      </section>
    </LayOut>
  )
}

export default Results
