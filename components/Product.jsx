import React, { useEffect, useState } from 'react'

const Product = () => {
    const [product, setProduct] = useState([])
    const GetProduct = async () => {
        try {
            const response = await fetch("https://dummyjson.com/product")
            const data = await response.json()
            setProduct(data.product)

        } catch (err) {
            console.error(err);
            
        }
    }
    useEffect(() => {
        GetProduct()
    }, [])
  return (
    <div>
     
    </div>
  )
}

export default Product
