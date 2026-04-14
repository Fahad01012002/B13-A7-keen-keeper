'use client'

import { useContext } from "react";
import { AppContext } from "../ContextApi/ContextApi";
import Card from "./Card";

const CardUi = () => {



    const { friend, loading } = useContext(AppContext);

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }


    return (
        <div className="grid grid-cols-4 gap-5 mb-20">
            {
                friend.map(item => {
                    return (
                        <Card key={item.id} item={item} />
                    )
                })
            }
        </div>
    );
};

export default CardUi;