export type BeginnerProgramProps<T, Output> = {
  view: (signal: Function, model: T) => Output
  update?: (action, model: T) => T
  init: (...args) => T
}

export { createSignal } from './signal'
export { forward } from './forward'
export { message } from './message'
