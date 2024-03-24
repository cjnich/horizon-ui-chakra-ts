import { useContext } from "react";
import AuthStack from "views/auth";
import HomeStack from "views/admin";

import { GlobalStateContext } from "contexts/Global";


/**
 * Since, the screens are only visible after log in into the application.
 * This stack controls it.
 * @returns JSX.Element
 */
const Entry = () => {
    const { isMockAuthenticated } = useContext(GlobalStateContext);

    return (
        isMockAuthenticated ? <HomeStack/> : <AuthStack />
    );
};

export default Entry;