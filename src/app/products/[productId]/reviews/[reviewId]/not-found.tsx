"use client";
import { usePathname } from "next/navigation";
export default function notFound() {

     const pathName = usePathname()

     const productId = pathName.split("/")[2];
     const reviewId = pathName.split("/")[4];

     return <h1>review {reviewId} not found for product {productId}</h1>
}