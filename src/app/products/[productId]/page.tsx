import { Metadata } from "next";

type ProductDetailProps = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({ params}: ProductDetailProps): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 1000)
    });

    return {
        title: `Product ${title}`
    }
}

const ProductDetail = ({ params }: ProductDetailProps) => {
    return (
        <h2>Product Detail {params.productId}</h2>
    )
}

export default ProductDetail;