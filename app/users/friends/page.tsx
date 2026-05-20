'use client'

import { useState } from "react";

async function makePostRequest() {
   // const response = await fetch(`${process.env.NEXT_URL}/api/hello`, {

    const response = await fetch('/api/hello', {    
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: "IRFAN MUBASYIR" })
    });

    const data = await response.json();
    console.log(data);

    return { data };
}

export default function FriendsPage() {
    const [message, setMessage] = useState("");
 
    const handleButtonClick = async () => {
        const { data } = await makePostRequest();
        setMessage(data.message);
    };

    return (
        <div>
            <p> {message} </p>
            <button style={{ color: 'white', backgroundColor: 'blue', padding: '10px 20px', fontSize: '16px' }} onClick={handleButtonClick}>
                Click Me
            </button>
        </div>
    )
}