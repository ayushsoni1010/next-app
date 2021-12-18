import { useRouter } from 'next/router';

function ProductId() {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <h1>Hello Product serial {productId}</h1>
    )
}
export default ProductId;