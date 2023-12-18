
function DisplayName(props) {
  return (
    <div>
    <list>
      <ol>{props.name}</ol>
      </list>
    </div>
  )
}


export default function ListProp()
 {
    const students = ["Harish","jai","Jaisuryah"]
    const sName=students.map((stu)=><DisplayName name={stu}/>)
  return (
    <div>
                {sName}      
    </div>
  )
}
