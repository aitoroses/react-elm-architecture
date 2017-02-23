export const message = (signal, f) => e => signal(f(e))()
