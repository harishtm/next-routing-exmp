// "use client"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: {
        absolute: 'Products List'
    }
}

const Products = () => {
    const staticProductId = 100;
    return (
        <h2>
            Products List
            <hr/>
            {
                [1, 2, 3].map((productId) => {
                    return (
                        <li key={productId}>
                            <Link href={`products/${productId}`} key={productId}>
                                Product {productId}
                            </Link>
                        </li>
                    )
                })
            }
            <li>
                {/* Replace prop replaces the current history state
                    instaed of adding a new URL to the stack */}
                <Link key={staticProductId} href={`products/${staticProductId}`} replace>
                    Product {staticProductId}
                </Link>
            </li>
        </h2>
    )
}

export default Products