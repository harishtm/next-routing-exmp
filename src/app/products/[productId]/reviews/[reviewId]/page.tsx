const ProductReview = ({
    params
}: {
    params: {productId: string, reviewId: string}
}) => {

    console.log(params)
    return (
        <h2>
            Review {params.reviewId} for product {params.productId}
        </h2>
    )
}

export default ProductReview