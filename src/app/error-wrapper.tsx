"use client";

import "./globals.css";
import {useState} from "react";

interface WrapperProps{
    children: React.ReactNode;
}

const ErrorSimulator=({
    message = "An error occurred",
}:{
    message?:string;
}) =>{
    const [error, setError] = useState(false);

    if(error) throw new Error(message);

    return(
        <button
            title="Simulate an Error"
            className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm uppercase tracking-wider hover:bg-red-500 hover:text-red-950 transition-colors duration-300"
            onClick={() => setError(true)}
        >
            Simulate Error
        </button>
    );
};

export const ErrorWrapper = ({children}:WrapperProps) =>{
    return(
        <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
            <div className="absolute top-0 left-4 -translate-y-1/2">
                <ErrorSimulator message="Simulated error in ErrorWrapper" />
                {children}  
            </div>
        </div>
        
    );
}