import React from 'react'

export default function List() {
    const college=[{id:1,stuName:"Sachin",age:26},
                   {id:2,stuName:"Suryah",age:27},
                   {id:3,stuName:"lalith",age:29}]
  return (
    <div>
         <div>List</div>
         <ul>
            {college.map(student =>(
                <li key={student.id}>
                    Name :{student.stuName},Age:{student.age}
                </li>
            ))}
         </ul>
    </div>
  )
}