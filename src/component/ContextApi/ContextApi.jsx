'use client';

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const ContextApi = ({ children }) => {

    const [friend, setFriend] = useState([]);
    const [loading, setLoading] = useState(true);
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setFriend(data);
                    setLoading(false);
                }, 1500);
            });
    }, []);

    const value = {
        friend,
        setFriend,
        loading,
        setLoading,
        timeline,
        setTimeline
    };



    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );

};

export default ContextApi;