'use client';

import { AppContext } from "@/component/ContextApi/ContextApi";
import { useContext, useState } from "react";

const TimeLinePage = () => {

    const { timeline } = useContext(AppContext);
    const [filterType, setFilterType] = useState('all');

    const filteredTimeline = filterType === "all"
        ? timeline
        : timeline.filter(item => item.actionType === filterType);

    return (
        <div className="w-11/12 mx-auto mt-20 mb-20 space-y-4">
            <h2 className="text-[48px] font-bold">Timeline</h2>
            <fieldset className="fieldset">
                <select
                    defaultValue="all"
                    className="select"
                    onChange={(e) => setFilterType(e.target.value)}
                >
                    <option value="all">All Timeline</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>
            </fieldset>

            <div className="">
                {filteredTimeline.length === 0 ? (
                    <p className="text-center text-gray-500">No {filterType !== "all" ? filterType : ""} data found</p>
                ) : (
                    <div className="space-y-5">
                        {filteredTimeline.map((item, index) => (
                            <div key={index} className="flex items-center justify-start gap-3 cursor-pointer border p-4 border-gray-300 rounded-lg shadow-sm">
                                <div className="flex items-center justify-center text-3xl">
                                    {item.actionType === 'call' && '📞'}
                                    {item.actionType === 'text' && '💬'}
                                    {item.actionType === 'video' && '🎥'}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center">
                                    <h3 className=" text-gray-800">
                                        {item.actionType === 'call' && (
                                            <>
                                                <span className="font-medium text-[20px]">Call with</span> <span className="text-[18px] text-[#64748b]">{item.contactName}</span>
                                            </>
                                        )}

                                        {item.actionType === 'text' && (
                                            <>
                                                <span className="font-medium text-[20px]">Text with</span> <span className="text-[18px] text-[#64748b]">{item.contactName}</span>
                                            </>
                                        )}
                                        {item.actionType === 'video' && (
                                            <>
                                                <span className="font-medium text-[20px]">Video with</span> <span className="text-[18px] text-[#64748b]">{item.contactName}</span>
                                            </>
                                        )}
                                    </h3>
                                    <p className=" text-gray-500 mt-1 font-semibold">
                                        {item.timestamp}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    );
};

export default TimeLinePage;