import * as React from 'react'
import { createSignal } from './util'

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

  signal = createSignal(
    () => this.state.model,
    model => this.setState({ model })
  )(this.props.update)

  render() {
    return this.props.view(this.signal, this.state.model)
  }
}

type beginnerProgramType = <T>(p: BeginnerProgramProps<T>) => () => React.ReactElement<T>
export const beginnerProgram: beginnerProgramType =
  p => () => React.createFactory(BeginnerProgram)(p)
