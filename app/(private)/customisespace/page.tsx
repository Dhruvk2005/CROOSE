'use client'
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSpace } from '@/app/Apis/publicapi';

const Customisespace = () => {
    const [spaceName, setSpaceName] = useState("");
    const [loading, setLoading] = useState(false)
    const [number, setNumber] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [chatBotName, setChatBotName] = useState("")
    const [StartTime, setStartTime] = useState("")
    const [EndTime, setEndTime] = useState("")
    const router = useRouter()


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("name", spaceName);
        formData.append('chatbot_name', chatBotName)
        formData.append('start_time', StartTime)
        formData.append('end_time', EndTime)
        formData.append("category", "default_category");
        // formData.append("number", number); // If needed by backend
        formData.append("is_active", "1"); // String '1' like in Postman
        if (image) {
            formData.append("image", image);
        }

        try {
            const res = await createSpace(formData);
            console.log("Space created:", res);
            router.push("/dashboard/createnewspace")

        } catch (err) {
            console.log("Space not created:", err);
        } finally {
            setLoading(false);
        }
    };




    return (

        <div>
            {/* Header */}
            <div className='flex justify-between w-full border-b-[1px] border-[#EAECF0] px-[20px] pt-[10px] pb-[20px]'>
                <img className='w-[150px] mt-[8px]' src="/Vector.png" alt='crooselogo' />
                <div className='flex items-center'>
                    <p className='text-white'>Sign Up</p>
                </div>
            </div>


            <div className='flex flex-wrap justify-center items-center w-full min-h-[100vh] px-[20px]'>
                <div className='w-full max-w-[536px] flex flex-col gap-[40px]'>


                    <div className='text-center'>
                        <p className='text-[24px] md:text-[28px] font-bold font-Inter text-[#1D2939]'>
                            Create a customised space
                        </p>
                    </div>


                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='font-medium text-[14px]'>Space name</label>
                            <input
                                className='w-full p-[16px] border-2 border-[#D0D5DD] rounded-[16px]'
                                type='text'
                                placeholder='Enter space name'
                                value={spaceName}
                                onChange={(e) => setSpaceName(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col gap-[10px]'>
                            <label className='font-medium text-[14px]'>Assistant name</label>
                            <input
                                className='w-full p-[16px] border-2 border-[#D0D5DD] rounded-[16px]'
                                type='text'
                                placeholder='Enter Chatbot name'
                                value={chatBotName}
                                onChange={(e) => setChatBotName(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='font-medium text-[14px]'>Start time</label>
                            <input
                                className='w-full p-[16px] border-2 border-[#D0D5DD] rounded-[16px]'
                                type='text'
                                placeholder='Enter Start time'
                                value={StartTime}
                                onChange={(e) => setStartTime(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='font-medium text-[14px]'>End time</label>
                            <input
                                className='w-full p-[16px] border-2 border-[#D0D5DD] rounded-[16px]'
                                type='text'
                                placeholder='Enter End time'
                                value={EndTime}
                                onChange={(e) => setEndTime(e.target.value)}
                            />
                        </div>

                        {/* <div className='flex flex-col gap-[10px]'>
                                <label className='font-medium text-[14px]'>Number</label>
                                <input
                                    className='w-full p-[16px] border-2 border-[#D0D5DD] rounded-[16px]'
                                    type='number'
                                    placeholder='Enter number'
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div> */}

                        <div className='flex flex-col gap-[10px]'>
                            <label className='font-medium text-[14px]'>Image</label>
                            <input
                                className='w-full text-[grey] p-[16px] border-2 border-[#D0D5DD] rounded-[16px]'
                                type='file'
                                onChange={(e) => {
                                    if (e.target.files) setImage(e.target.files[0]);
                                }}

                            />
                        </div>
                    </div>




                </div>
            </div>
            <div className='w-full flex flex-wrap justify-end gap-[15px] p-[30px] mt-[40px]'>
                <button className='w-[100px] py-[10px] px-[14px] border-2 border-[#D0D5DD] rounded-[8px] font-semibold font-inter text-[14px] bg-white text-[#344054]'>
                    Previous
                </button>
                <button
                    onClick={handleSubmit}
                    type='submit'
                    disabled={loading}
                    className='w-[200px] py-[10px] px-[14px] rounded-[8px] font-semibold font-inter text-[14px] bg-[#685BC7] text-white'
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </div>
        </div>

    )
}

export default Customisespace;
