import React,{useState} from 'react'

export default function StateHoldObject() 
{
    const[college,setCollege]=useState({cid:1,cname:"Jai",year:2023})
  return (
    <div>
        <h1>College id is {college.cid}</h1>
        <h1>College name is {college.cname}</h1>
        <h1>College year is {college.year}</h1>
    </div>
  )
}
