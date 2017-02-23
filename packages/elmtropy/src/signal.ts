export const createSignal = (getModel: () => any, setModel: (model) => void) => (update?: (action, model) => void) =>
    (action) => () => {
        console.debug(action)

        // If update is not a function, action should be a function
        if (typeof update === "function") {
          setModel(update(action, getModel()))
        } else {
          setModel(action(getModel()))
        }
    }
