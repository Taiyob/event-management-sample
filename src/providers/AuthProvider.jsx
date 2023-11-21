import { createContext } from "react";
import PropTypes from 'prop-types'; 
import app from '../firebase/firebase.config'
import {getAuth} from '../firebase/firebase.config' 

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object,
}

export default AuthProvider;