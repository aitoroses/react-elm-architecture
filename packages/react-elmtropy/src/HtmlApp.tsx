import * as React from 'react'
import { createSignal, BeginnerProgramProps } from 'elmtropy'

type Props<T> = BeginnerProgramProps<T, React.ReactElement<any>>

class BeginnerProgram<T> extends React.Component<Props<T>, any> {

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

type beginnerProgramType = <T>(p: Props<T>) => () => React.ReactElement<T>
export const beginnerProgram: beginnerProgramType =
  p => () => React.createFactory(BeginnerProgram)(p)
