'use client'

import { useContext } from "react";
import { AppContext } from "../ContextApi/ContextApi";
import Card from "./Card";

const CardUi = () => {
    
const {friend , loading} = useContext(AppContext);

    return (
        <div className="grid grid-cols-4 gap-5 mb-20">
            {
                friend.map(item => {
                    return(
                        <Card key={item.id} item={item}/>
                    )
                })
            }
        </div>
    );
};

export default CardUi;