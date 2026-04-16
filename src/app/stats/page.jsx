'use client';

import { AppContext } from "@/component/ContextApi/ContextApi";
import { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const AnalyticsPage = () => {
    const { timeline } = useContext(AppContext);

    const COLORS = ["#6C3BFF", "#1F4D3C", "#2FA463"];

    const callCount = timeline?.filter(item => item.actionType === 'call').length || 0;
    const textCount = timeline?.filter(item => item.actionType === 'text').length || 0;
    const videoCount = timeline?.filter(item => item.actionType === 'video').length || 0;

    const data = [
        { name: "Text", value: textCount },
        { name: "Call", value: callCount },
        { name: "Video", value: videoCount },
    ];

    return (
        <div className="w-11/12 mx-auto mt-20 mb-20">
            <h1 className="font-bold text-[40px]">Friendship Analytics</h1>

            <div className="p-8 border border-gray-200 shadow-lg rounded-lg mt-5">
                <h3 className="text-[20px]">By Interaction Type</h3>

                <div className="flex flex-col items-center justify-center">
                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell className="rounded-full" key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>

                        <Tooltip />

                    </PieChart>
                    <div className="flex gap-4">
                        <div className="flex gap-2 items-center">
                            <div className="rounded-full w-5 h-5 bg-[#6C3BFF]"></div>
                            <h2 className="text-[14px]">Text</h2>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="rounded-full w-5 h-5 bg-[#1F4D3C]"></div>
                            <h2 className="text-[14px]">Call</h2>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="rounded-full w-5 h-5 bg-[#2FA463]"></div>
                            <h2 className="text-[14px]">Video</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AnalyticsPage;