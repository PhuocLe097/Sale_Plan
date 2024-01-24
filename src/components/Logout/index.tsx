import * as React from 'react';
import AuthenticationStore from '../../stores/authenticationStore';
import Stores from '../../stores/storeIdentifier';
import { inject } from 'mobx-react';
export interface ILogoutProps {
    authenticationStore?: AuthenticationStore;
}

const Logout: React.FC<ILogoutProps> = ({ authenticationStore }) => {
    React.useEffect(() => {
        const logout = async () => {
            await authenticationStore!.logout();
            window.location.href = '/home';
        };

        logout();
    }, [authenticationStore]);

    return null;
};
export default inject(Stores.AuthenticationStore)(Logout);
