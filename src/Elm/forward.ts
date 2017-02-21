export const forward = (signal, f) => a => () => signal(f(a))()
