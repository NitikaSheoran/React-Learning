import React from 'react'
import {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom';

function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/NitikaSheoran')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    return (
        <div className='text-centre m-4 bg-gray-600 text-ehite p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt='avatar' className='rounded-full h-24 w-24'/>
        </div>
        
    )
}
export default Github
export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/NitikaSheoran')
    return response.json();
}