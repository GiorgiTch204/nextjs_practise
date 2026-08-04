import { Metadata } from "next";

type Props = {
    params: Promise<{ProductId: string}>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const id = (await params).ProductId;
    return {
        title: `Product ${id}`
    }
}

export default async function ProductList({
    params,
}:Props) {
    const productId = (await params).ProductId;
    return <h1>Details about product {productId}</h1>  
};