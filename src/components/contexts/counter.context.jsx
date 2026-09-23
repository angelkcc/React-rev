import { createContext, useState } from "react";

export const CounterContext = createContext({
  count: 0,
  updateCount: () => {},
  resetCount: () => {},
});

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        count,
        updateCount: setCount,
        resetCount: () => setCount(0),
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CountProvider;
