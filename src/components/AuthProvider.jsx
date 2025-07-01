'use client'
import { store } from '@/store/store';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { Provider } from 'react-redux';

const AuthProvider = ({children}) => {
    return (
        <SessionProvider>
            <Provider store={store}>
            {children}
            </Provider>
        </SessionProvider>
    );
};

export default AuthProvider;