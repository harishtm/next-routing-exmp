import { notFound } from "next/navigation"

const ProductReview = ({
    params
}: {
    params: {productId: string, reviewId: string}
}) => {

    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <h2>
            Review {params.reviewId} for product {params.productId}
        </h2>
    )
}

export default ProductReview