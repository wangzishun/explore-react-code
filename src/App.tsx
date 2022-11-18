import { Component, Fragment, useEffect, useLayoutEffect, useState } from 'react'

function FunctionComponentEffects() {
  const [count, setCount] = useState(10)

  useEffect(() => {
    console.log('useEffect called')

    return () => {
      console.log('useEffect return called')
    }
  })
  useLayoutEffect(() => {
    console.log('useLayoutEffect called')

    return () => {
      console.log('useLayoutEffect return called')
    }
  })

  console.log('FunctionComponentEffects render called')
  return <button onClick={() => setCount(count + 1)}>FunctionComponentEffects {count}</button>
}

class ClassComponentLifeCycles extends Component {
  state = {
    count: 10
  }

  componentDidMount() {
    console.log('componentDidMount called')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate called')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called')
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    console.log('getSnapshotBeforeUpdate called')
    return null
  }

  static getDerivedStateFromProps(props: Readonly<{}>, state: Readonly<{}>) {
    console.log('getDerivedStateFromProps called')
    return null
  }

  onClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log('ClassComponentLifeCycles render called')
    return <button onClick={this.onClick}>ClassComponentLifeCycles {this.state.count}</button>
  }
}

function App() {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>switch to {!visible}</button>
      {visible && (
        <Fragment>
          <FunctionComponentEffects />
          <ClassComponentLifeCycles />
        </Fragment>
      )}
    </div>
  )
}

export default App
