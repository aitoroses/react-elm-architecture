import * as React from 'react'

type BeginnerProgramProps<T> = {
  view: (signal: Function, model: T) => React.ReactElement<any>
  update?: (action, model: T) => T
  init: (...args) => T
}

class BeginnerProgram<T> extends React.Component<BeginnerProgramProps<T>, any> {
  constructor(props) {
    super(props)
    this.state = { model: props.init() }
  }

  signal = (action) => () => {
    console.debug(action)
    if (this.props.update) {
      this.setState({ model: this.props.update(action, this.state.model) })
    } else {
      this.setState({ model: action(this.state.model) })
    }
  }


  render() {
    return this.props.view(this.signal, this.state.model)
  }
}

type beginnerProgramType = <T>(p: BeginnerProgramProps<T>) => () => React.ReactElement<T>
export const beginnerProgram: beginnerProgramType =
  p => () => React.createFactory(BeginnerProgram)(p)
