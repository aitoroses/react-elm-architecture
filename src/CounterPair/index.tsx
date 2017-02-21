import { HtmlApp } from '../Elm'
import * as CounterPair from './CounterPair'

export const program = HtmlApp.beginnerProgram<CounterPair.Model>({
  init: () => CounterPair.init(0, 0),
  view: CounterPair.view
})
