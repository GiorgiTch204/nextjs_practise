import { Metadata } from "next";

type Props = {
    params: Promise<{ProductId: string}>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const id = (await params).ProductId;
    const title = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${id}`);
        }, 1000);
    });
    return {
        title: title
    }
}

export default async function ProductList({
    params,
}:Props) {
    const productId = (await params).ProductId;
    return <h1>Details about product {productId}</h1>  
};