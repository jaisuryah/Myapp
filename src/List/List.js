export default function List() {
    const animals=["dog","cat","deepak","lion"]
    const result = animals.map((ani,index)=><li key={index}>{index}{ani}</li>)//1&2
  return (
    <div>
      <ul>{result}</ul>
      </div>
  )
}


// function DisplayName(props) {
//   return (
//     <div>
//       {props.name}
//     </div>
//   )
// }


// export default function List() {
//     const students = ["Harish","jai","Jaisuryah"]
//     const sName=students.map((stu)=><DisplayName name={stu}/>)
//   return (
//     <div>
//                 {sName}      
//     </div>
//   )
// }
