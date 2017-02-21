import * as React from 'react'

const Increment = 'Increment'
const Decrement = 'Decrement'

const Action: any = {
  [Increment]: {type: Increment},
  [Decrement]: {type: Decrement}
}

export type Model = number

export const init: (x: number) => Model
  = count => count

export const update = (action, model) => {
  switch (action.type) {

    case Increment:
      return model + 1

    case Decrement:
      return model - 1

    default:
      return model
  }
}

export const view = (signal, model) => (
  <div>
    <button onClick={signal(Action.Decrement)}>-</button>
    <div>{model}</div>
    <button onClick={signal(Action.Increment)}>+</button>
  </div>
)
