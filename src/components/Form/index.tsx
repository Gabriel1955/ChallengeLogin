import {useState, useEffect, Children} from "react"
import { FormControl } from "./styles"

export default function Form(_props){
  const [childrens, setChildrens] = useState([])

  function onSubmit(event){
    event.preventDefault()
    const names = childrens.map(Children => Children.props.name)
    const objectForm = {};
    names.filter(name => name).forEach(name => {
      objectForm[name] = event.target[name].value
    })
    if(_props.onsubmit){
      _props.onsubmit(objectForm)
    } 
  }

  useEffect(()=>{
    console.log(_props)
    if(_props.children.map){
      setChildrens(_props.children)
    }
    else{
      setChildrens([_props.children])
    }
  },[])
 
  return (
    <form onSubmit={onSubmit}>
      {childrens.map(Children =>(
        <FormControl>
          {Children.props.label &&<label>{Children.props.label}</label>}
          {Children}
        </FormControl>
      ))}
    </form>
  )
}
