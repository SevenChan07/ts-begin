import * as React from 'react'
import {render} from 'react-dom'

interface Props {
  name: string
}

class App extends React.Component<Props, any> {
  render() {
    return (
      <div>
        <p>我是{this.props.name}</p>
      </div>
    )
  }
}

render(<App name='kaka'/>, document.getElementById('app'))