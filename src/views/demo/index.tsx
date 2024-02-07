import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age: number
}
interface IState {
  count: number
  adress: string
}
// IProps和IState是两个接口，分别定义了组件的props和state类型。
// state是组件的内部状态，可以根据组件的状态变化而变化。
// PureComponent是React.Component的子类，它会对props和state进行浅比较，只有当props或state发生变化时才会重新渲染。
class Demo extends PureComponent<IProps, IState> {
  name = 'syw'
  age = 25
  state = {
    count: 0,
    adress: '北京'
  }
  render() {
    const { name, age } = this.props
    const { count, adress } = this.state
    return (
      <div>
        <div>
          {name}-{age}
        </div>
        <div>
          {count}-{adress}
        </div>
      </div>
    )
  }
}

export default Demo
