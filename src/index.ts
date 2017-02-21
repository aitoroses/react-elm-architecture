import { render } from 'react-dom'
import { program as CounterProgram } from './Counter/index'
import { program as CounterPairProgram } from './CounterPair/index'

render(CounterProgram(), document.getElementById('app1'))
render(CounterPairProgram(), document.getElementById('app2'))
