import { HtmlApp } from 'elm'
import * as Counter from './Counter'

export const program = HtmlApp.beginnerProgram<Counter.Model>({
  init: () => Counter.init(0),
  update: Counter.update,
  view: Counter.view
})
