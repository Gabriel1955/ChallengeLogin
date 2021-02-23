import { useState, useEffect } from 'react'
import { FormControl, TextInvalid } from './styles'

export default function Form(_props) {
  const [childrens, setChildrens] = useState([])
  const [listInvalid, setListInvalid] = useState([])
  const [reload, setReload] = useState(false)

  function validateFields(event) {
    let res = true
    childrens.map((children, index) => {
      const props = children.props
      listInvalid[index] = false
      if (props.rules) {
        props.rules.forEach((rule) => {
          if (rule.required) {
            if (event.target[props.name].value === '') {
              listInvalid[index] = rule.message
              res = false
            }
          }
        })
      }
      setListInvalid(listInvalid)
    })
    setReload(!reload)
    return res
  }

  function onSubmit(event) {
    event.preventDefault()
    const validated = validateFields(event)
    if (validated) {
      const names = childrens.map((Children) => Children.props.name)
      const objectForm = {}
      names
        .filter((name) => name)
        .forEach((name) => {
          objectForm[name] = event.target[name].value
        })
      if (_props.onsubmit) {
        _props.onsubmit(objectForm)
      }
    }
  }

  useEffect(() => {
    if (_props.children.map) {
      setChildrens(_props.children)
    } else {
      setChildrens([_props.children])
    }
  }, [reload])

  return (
    <form onSubmit={onSubmit} action="#0">
      {childrens.map((Children, index) => (
        <FormControl key={index}>
          {Children.props.label && <label>{Children.props.label}</label>}
          {Children}
          {listInvalid[index] && <TextInvalid>{listInvalid[index]}</TextInvalid>}
        </FormControl>
      ))}
    </form>
  )
}
