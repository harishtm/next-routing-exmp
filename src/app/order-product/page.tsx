"use client"
import { useRouter } from "next/navigation"


const OrderProduct = () => {

    const router = useRouter()
    const handlerOrder = () => {
        console.log("Order placed successfully")
        // assuming on success redirect to Home page
        // Also router.replace, router.back, router.forward can also be used
        router.push('/')
    }
    return (
        <>
            <h3>Order Product</h3>
            <button onClick={handlerOrder}>Place Order</button>
        </>
    )
}

export default OrderProduct;