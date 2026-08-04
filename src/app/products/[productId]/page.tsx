import {notFound, redirect} from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string, reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  if(parseInt(reviewId)>1000){
    notFound();
  }
  return <h1>Review {reviewId} - Product Details: {productId}</h1>;
}