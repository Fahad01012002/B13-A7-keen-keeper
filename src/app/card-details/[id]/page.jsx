'use client';

import { AppContext } from "@/component/ContextApi/ContextApi";
import { Archive, BellRing, MessageSquareMore, PhoneCall, Trash, Video } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext } from "react";

const CardDetailsPage = () => {

    const { friend, timeline, setTimeline, loading } = useContext(AppContext);
    const { id } = useParams();

    if (loading) {
    return (
        <div className="h-screen flex justify-center items-center">
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
}

    const selectedCard = friend?.find(c => String(c.id) === String(id));

    if (!selectedCard) {
        return <h1 className="text-center mt-10 text-red-500">Contact not found!</h1>;
    }


    const { name, picture, email, status, tags, bio, days_since_contact, next_due_date, goal } = selectedCard;

    const handleTimeLine = (contactId, contactName, actionType) => {

        const newEntry = {
            id: Date.now(),
            contactId: contactId,
            contactName: contactName,
            actionType: actionType,
            timestamp: new Date().toLocaleString()
        };

        setTimeline(prev => [newEntry, ...prev]);

    }

    const contactTimeline = timeline?.filter(entry => String(entry.contactId) === String(id));

    return (
        <div className="grid grid-cols-6 gap-5 mb-20 mt-20 w-11/12 mx-auto">
            <div className="col-span-2">
                <div className="p-6 flex flex-col justify-center items-center border border-gray-300 shadow-lg space-y-3 rounded-lg mb-5">
                    <Image
                        src={picture}
                        alt="name"
                        width={80}
                        height={80}
                        className="rounded-full mb-3"
                    />
                    <h2 className='font-bold text-[18px]'>{name}</h2>
                    <div className="flex justify-center items-center">
                        <p className={`rounded-full px-4 py-1 ${status === 'ACTIVE' ? 'bg-[#244d3f] text-white' :
                            status === 'OVERDUE' ? 'bg-[#ef4444] text-white' :
                                'bg-[#efad44] text-white'
                            }`}>
                            {status}
                        </p>
                    </div>
                    <div className='flex gap-3 justify-center items-center'>
                        {
                            tags.map((tag, index) => {
                                return (
                                    <div key={index}>
                                        <h2 className='px-4 py-1 bg-[#5ef7b745] text-[#244d3f] rounded-full font-semibold'>{tag}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h2 className="font-semibold text-[15px]">{`"${bio}"`}</h2>
                    <p className="font-semibold text-[14px]">Email : {email}</p>
                </div>

                <div className="text-center space-y-3">
                    <h2 className="flex items-center gap-2 justify-center border border-gray-300 py-3 font-semibold rounded-lg"><BellRing size={17} />Snooze 2 weeks</h2>
                    <h2 className="flex items-center gap-2 justify-center border border-gray-300 py-3 font-semibold rounded-lg"><Archive size={17} />Archive</h2>
                    <h2 className="flex items-center gap-2 justify-center border border-gray-300 py-3 font-semibold rounded-lg text-red-500"><Trash size={17} />Delete</h2>
                </div>

            </div>

            <div className="col-span-4 space-y-6">
                <div className="grid grid-cols-3 gap-5">
                    <div className="text-center rounded-lg px-4 py-8 border border-gray-300 shadow-lg">
                        <h2 className="text-[30px] text-[#244d3f] font-semibold">{days_since_contact}</h2>
                        <p className="text-[18px] text-[#244d3f]">Days Since Contact</p>
                    </div>
                    <div className="text-center rounded-lg px-4 py-8 border border-gray-300 shadow-lg">
                        <h2 className="text-[30px] text-[#244d3f] font-semibold">{goal}</h2>
                        <p className="text-[18px] text-[#244d3f]">Goal (Days)</p>
                    </div>
                    <div className="text-center rounded-lg px-4 py-8 border border-gray-300 shadow-lg">
                        <h2 className="text-[30px] text-[#244d3f] font-semibold">{next_due_date}</h2>
                        <p className="text-[18px] text-[#244d3f]">Next Due</p>
                    </div>
                </div>

                <div className="space-y-4 p-4 border border-gray-300 shadow-lg rounded-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[24px] font-medium">RelationShip Goal</h2>
                        <button className="btn font-medium">Edit</button>
                    </div>
                    <div>
                        <h2>Connect every <span className="font-medium">30 days</span></h2>
                    </div>
                </div>

                <div className="p-6 border border-gray-300 shadow-lg rounded-lg">
                    <h2 className="text-[20px] font-semibold text-[#244d3f] mb-4">Quick Check-In</h2>
                    <div className="grid grid-cols-3 gap-3">
                        <button onClick={() => handleTimeLine(selectedCard.id, selectedCard.name, 'call')} className="flex items-center border border-gray-200 rounded-lg bg-gray-100 flex-col font-semibold gap-2 p-3 cursor-pointer"><PhoneCall size={20} /> Call</button>
                        <button onClick={() => handleTimeLine(selectedCard.id, selectedCard.name, 'text')} className="flex items-center border border-gray-200 rounded-lg bg-gray-100 flex-col font-semibold gap-2 p-3 cursor-pointer"><MessageSquareMore />Text</button>
                        <button onClick={() => handleTimeLine(selectedCard.id, selectedCard.name, 'video')} className="flex items-center border border-gray-200 rounded-lg bg-gray-100 flex-col font-semibold gap-2 p-3 cursor-pointer"><Video />Video</button>
                    </div>
                </div>

                <div className="p-4 border border-gray-300 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-[#244d3f] text-[20px]">Recent Informations</h2>
                        <button className="btn">Full History</button>
                    </div>

                    <div className="">
                        {
                            contactTimeline.length === 0 ? (
                                <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-300 mt-5">
                                    <p className="font-bold text-[20px]">No communication history yet.</p>
                                    <p className="text-gray-400 mt-2 font-semibold">Start connecting with your contacts!</p>
                                </div>
                            ) : (
                                contactTimeline?.map(entry => (
                                    <div key={entry.id} className="border border-gray-300 mb-4 px-6 py-2 flex justify-between items-center mt-6 rounded-lg shadow-sm">
                                        <div className="flex items-center gap-5">
                                            {
                                                entry.actionType === 'text' ? <MessageSquareMore /> :
                                                    entry.actionType === 'call' ? <PhoneCall /> : <Video />
                                            }
                                            <div>
                                                <h2>
                                                    {
                                                        entry.actionType === 'text' ? 'Text' :
                                                            entry.actionType === 'call' ? 'Meetup' : 'Video'
                                                    }
                                                </h2>
                                                <p>
                                                    {
                                                        entry.actionType === 'text' ? 'Asked for career advice' :
                                                            entry.actionType === 'call' ? 'Industry conference meetup' : 'Asked for career advice'
                                                    }
                                                </p>

                                            </div>
                                        </div>
                                        <h2>
                                            {
                                                entry.timestamp
                                            }
                                        </h2>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetailsPage;