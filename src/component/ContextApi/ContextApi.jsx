'use client';

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const ContextApi = ({ children }) => {

    const [friend, setFriend] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setFriend(data));

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const value = {
        friend,
        setFriend,
        loading,
        setLoading,
    };



    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );

};

export default ContextApi;