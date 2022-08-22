import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSession from "hooks/auth/useSession";

const PrivateRoute = ( WrappedComponent : any  , toPage = '/' ) => {
    
    // eslint-disable-next-line react/display-name
    return ( props : any ) => {
   
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [showChild, setShowChild] = useState(false);
    
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          
            setShowChild(true);
    
        }, []);
    
        if (!showChild) {
            return <></>;
        }

        // checks whether we are on client / browser or server.
        if (typeof window !== "undefined") {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const Router = useRouter();
            
            const accessToken = window.localStorage.getItem("token");

            // If there is no access token we redirect to "/" page.
            if (!accessToken) {
                
                Router.replace(toPage);
                
                return null;

            }

            // If this is an accessToken we just render the component that was passed with all its props

            return <>
                <WrappedComponent {...props} />;
            </>
        }

        // If we are on server, return null
        return <></>

    };
};

export default PrivateRoute;