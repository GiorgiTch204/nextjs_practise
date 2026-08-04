"use client";

import {useRouter} from "next/navigation";

export default function OrderProduct(){
    
    const router = useRouter();
    const handleOrder = () => {
        alert("Order Placed Successfully!");
    }
    
    router.push("/");

    return(
        <>
            <h1>Order Product</h1>
            <button onClick={handleOrder}>Order Now</button>
        </>
    ) 
};