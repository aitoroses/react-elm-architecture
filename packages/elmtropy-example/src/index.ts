import { render } from 'react-dom'
import { program as CounterProgram } from './Counter'
import { program as CounterPairProgram } from './CounterPair'

render(CounterProgram(), document.getElementById('app1'))
render(CounterPairProgram(), document.getElementById('app2'))
