"use client"

import React, { useEffect } from 'react'

const Page = ({ params }:any) => {
const { name }:any = React.use(params); 

    useEffect(()=>{

        console.log(name  ,"params")

    },[])

    
    
    return (
    <div>
      
    </div>
  )
}

export default Page
