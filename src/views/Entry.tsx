import { useContext, useEffect, useState } from "react";
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
    const [ authenticated, setAuthenticated ] = useState(false);

    useEffect(() => {
        console.log("here 2", isMockAuthenticated);
        setAuthenticated(isMockAuthenticated);
    }, [isMockAuthenticated]);

    console.log("here 1");

    return (
        authenticated ? <HomeStack/> : <AuthStack />
    );
};

export default Entry;