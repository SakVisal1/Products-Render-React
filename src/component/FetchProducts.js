import { useEffect } from "react"
import { useState } from "react"
import Loading from "./Skeleton"
import { ProductCard } from "./Card"

 const CardProduct = () => {
    const[products , setProducts] = useState([])
    const[loading , setLoading] = useState(true)


        const fetchProduct = () => {
            fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(Response =>
                {
                    setProducts(Response)
                    setLoading(false)
                }
            )}
            useEffect(() => {
                fetchProduct()
            },[])
            return(
                <>
                <div className="container mt-3">
                    <h1 style={{textAlign:'center' , marginBottom: '10px'}}> Product Card List</h1>
                    <div className="row g-3">
                    {
                        loading ? <Loading/> : products.map((product) => (
                            <ProductCard key={product.id} product={product}/>))
                    }
                    </div>
                </div>
                </>
            )

}
export default CardProduct