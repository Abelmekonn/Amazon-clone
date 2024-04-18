import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
function Results() {
  const {categoryName}=useParams();
  return (
    <LayOut>
      result
    </LayOut>
  )
}

export default Results
