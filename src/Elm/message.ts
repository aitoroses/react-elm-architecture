export const targetValue = e => e.target.value
export const message = (signal, f) => e => signal(f(e))()
