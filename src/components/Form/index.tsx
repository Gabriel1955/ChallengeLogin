import { useState, useEffect, ReactElement } from 'react'
import { FormControl, TextInvalid } from './styles'
import { useSelector } from 'react-redux'

export default function Form(_props: HTMLElement): ReactElement {
  const [childrens, setChildrens] = useState([])
  const [listInvalid, setListInvalid] = useState([])
  const [reload, setReload] = useState(false)

  function validateFields(event: React.SyntheticEvent<EventTarget>): boolean {
    let isValidForm = true
    childrens.map((children, index) => {
      const props = children.props
      listInvalid[index] = false
      if (props.rules) {
        props.rules.forEach((rule) => {
          if (rule.required) {
            if (event.target[props.name].value === '') {
              event.target[props.name].style.border = '1px solid #ff377f'
              event.target[props.name].style['z-index'] = 2
              listInvalid[index] = rule.message
              isValidForm = false
            } else {
              event.target[props.name].style.border = ''
              event.target[props.name].style['z-index'] = 3
            }
          }
        })
      }
      setListInvalid(listInvalid)
    })
    setReload(!reload)
    return isValidForm
  }

  function onSubmit(event: React.SyntheticEvent<EventTarget>): void {
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
  }, [_props.children, reload])

  return (
    <form onSubmit={onSubmit}>
      {childrens.map((Children, index) => {
        return (
          <FormControl key={index}>
            {Children.props.label && <label>{Children.props.label}</label>}
            {Children}
            {listInvalid[index] && <TextInvalid>{listInvalid[index]}</TextInvalid>}
          </FormControl>
        )
      })}
    </form>
  )
}
