import * as React from 'react'
import * as Counter from '../Counter/Counter'
import { forward } from 'elm'

export type Model = {
  topCounter: Counter.Model,
  bottomCounter: Counter.Model
}

export const init: (a: number, b: number) => Model
  = (top, bottom) => ({
    topCounter: Counter.init(top),
    bottomCounter: Counter.init(bottom)
  })

export const Action = {
  Reset: model => init(0, 0),
  Top: action => model => ({
    ...model,
    topCounter: Counter.update(action, model.topCounter)
  }),
  Bottom: action => model => ({
    ...model,
    bottomCounter: Counter.update(action, model.bottomCounter)
  })
}

export const view = (signal, model: Model) => (
  <div>
    {Counter.view(forward(signal, Action.Top), model.topCounter)}
    {Counter.view(forward(signal, Action.Bottom), model.bottomCounter)}
    <button onClick={signal(Action.Reset)}>Reset</button>
  </div>
)
