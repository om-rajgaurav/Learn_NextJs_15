
interface ProductDetailsProps {
  params: Promise<{
    productId: string;
  }>;
}
export default async function ProductDetails({ params }: ProductDetailsProps) {
  const productId = (await params).productId
  return <h1>ProductDetails word!{productId}</h1>
}