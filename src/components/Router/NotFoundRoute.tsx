import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

const NotFoundRoute = () => {
    const location = useLocation();

    return <Route render={() => <Redirect to={{ pathname: '/exception?type=404', state: { from: location }, }} />} />
};

export default NotFoundRoute;
