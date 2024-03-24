import * as React from "react";
import GlobalContext from "./Context";

/**
 * Provides Context Provider for the Trading Account State Object.
 */
const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMockAuthenticated, setIsMockAuthenticated] = React.useState<boolean>(false);

    return (
        <GlobalContext.Provider
            value={{
                isMockAuthenticated,
                setIsMockAuthenticated,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;