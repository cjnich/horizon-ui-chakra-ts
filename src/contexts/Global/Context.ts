import * as React from "react";

const GlobalContext = React.createContext<{
    setIsMockAuthenticated: (state: boolean) => void;
    isMockAuthenticated: boolean;
}>({
    isMockAuthenticated: false,
    setIsMockAuthenticated: () => {},
});

export default GlobalContext;