import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';

const ProtectedRoute = ({ children, msg, redirect }) => {
    const navigate = useNavigate();
    const [{ user }] = useContext(DataContext);

    useEffect(() => {
        if (!user) {
            navigate('/auth',{ state: { msg, redirect} });
        }
    }, [user, navigate]);

    return user ? children : null; // Render children only if user is authenticated
}

export default ProtectedRoute;
