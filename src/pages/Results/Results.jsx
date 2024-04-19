import React,{useState,useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { ProductUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Product/ProductCard'
import classes from './Result.module.css';
import Loader from '../../components/Loader/Loader';
function Results() {
  const [results,setResults]=useState([]);
  const {categoryName}=useParams();
  const [isLoading, setisLoading] = useState(false)
  useEffect(()=>{
    setisLoading(true)
    axios.get(`${ProductUrl}/products/category/${categoryName}`)
    .then((res)=>{
      setResults(res.data)
      console.log(res.data)
      setisLoading(false)
    }).catch((err)=>{
      console.log(err)
      setisLoading(false)
    })
  }, [])
  
  return (
    <LayOut>
      { isLoading?(<Loader />):(
        <section>
        <h1 style={{padding:"20px"}}>Results</h1>
        <p style={{padding:"20px"}}>Category/{categoryName}</p>
        <hr style={{marginBottom:'10px'}}/>
        <div className={classes.product_container}>
          {results?.map((product)=>(
            <ProductCard 
              key={product.id}
              product={product}
              
              />
          ))}
        </div>
      </section>
      )}
      
    </LayOut>
  )
}

export default Results
