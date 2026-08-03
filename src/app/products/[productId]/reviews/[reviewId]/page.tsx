import Link from "next/link";

const reviewList = [
    { id: "1", content: "Great product!" },
    { id: "2", content: "Not bad." },
    { id: "3", content: "Could be better." },
];

export default async function ProductReview({
    params,
}: {
    params: Promise <{productId: string }>;
}){
    const { productId } = await params;
    return (
        <div>
            <h1>Reviews for product {productId}</h1>
            {reviewList.map((review) => (
                <p key={review.id}>
                    <Link href={`/products/${productId}/reviews/${review.id}`}>
                        {review.content}
                    </Link>
                </p>
            ))}
        </div>
    )
}