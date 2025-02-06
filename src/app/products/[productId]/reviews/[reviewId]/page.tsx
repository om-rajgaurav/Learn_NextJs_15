import { notFound } from "next/navigation";

interface ReviewDetailsProps {
  params: Promise<{
    reviewId: string;
    productId: string;
  }>;
}
export default async function ReviewDetails({ params }: ReviewDetailsProps) {
  const { reviewId, productId } = (await params)
  if (parseInt(reviewId) > 5) {
    notFound()
  }
  return <h1>review {reviewId} for the product of {productId}</h1>
}