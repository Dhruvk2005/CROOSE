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

    const router = useRouter()


    const [StartTime, setStartTime] = useState('');
    const [EndTime, setEndTime] = useState('');
    const [startError, setStartError] = useState('');
    const [endError, setEndError] = useState('');

    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    const handleStartChange = (e: any) => {
        const value = e.target.value;
        setStartTime(value);
        setStartError(timeRegex.test(value) ? '' : 'Please use format like 02:00');
    };

    const handleEndChange = (e: any) => {
        const value = e.target.value;
        setEndTime(value);
        setEndError(timeRegex.test(value) ? '' : 'Please use format like 02:00');
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("name", spaceName);
        formData.append('chatbot_name', chatBotName)
        formData.append('start_time', StartTime)
        formData.append('end_time', EndTime)
        const categoryId = localStorage.getItem("categoryId");
        const categoryName = localStorage.getItem("categoryName");

        console.log("Category ID:", categoryId);
        console.log("Category Name:", categoryName);

        formData.append("category", categoryName || "default_name");
        // console.log("stored category:", storedcategory);
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

        <div className='select-none' >
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
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-[10px]">
                                <label className="font-medium text-[14px]">Start time</label>
                                <input
                                    className={`w-full p-[16px] border-2 rounded-[16px] ${startError ? 'border-red-500' : 'border-[#D0D5DD]'
                                        }`}
                                    type="text"
                                    placeholder="Enter Start time (e.g., 02:00)"
                                    value={StartTime}
                                    onChange={handleStartChange}
                                />
                                {startError && (
                                    <span className="text-sm text-red-500">{startError}</span>
                                )}
                            </div>

                            <div className="flex flex-col gap-[10px]">
                                <label className="font-medium text-[14px]">End time</label>
                                <input
                                    className={`w-full p-[16px] border-2 rounded-[16px] ${endError ? 'border-red-500' : 'border-[#D0D5DD]'
                                        }`}
                                    type="text"
                                    placeholder="Enter End time (e.g., 14:30)"
                                    value={EndTime}
                                    onChange={handleEndChange}
                                />
                                {endError && (
                                    <span className="text-sm text-red-500">{endError}</span>
                                )}
                            </div>
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

                        <div className="flex flex-col gap-3 w-full">
                            <label className="font-medium text-sm text-gray-700">Upload Image</label>

                            {/* Styled upload area */}
                            <label
                                htmlFor="file-upload"
                                className="flex flex-col items-center justify-center w-full h-40 px-4 transition bg-white border-2 border-dashed rounded-xl cursor-pointer border-gray-300 hover:border-[#685BC7] hover:bg-purple-100"
                            >
                                <svg
                                    className="w-10 h-10 mb-2 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5V16.5a4.5 4.5 0 014.5-4.5h1.379a1 1 0 00.948-.684l.55-1.649a4 4 0 017.586-.242l.656 1.67a1 1 0 00.938.655H20.5a2.5 2.5 0 010 5H4a1 1 0 010-2h.5"
                                    />
                                </svg>
                                <span className="text-sm text-gray-500">
                                    <span className="font-medium text-[#685BC7]">Click to upload</span> or drag & drop
                                </span>
                                {image && (
                                    <span className="mt-2 text-sm text-green-600 font-medium">{image.name}</span>
                                )}
                            </label>

                            {/* Hidden input */}
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setImage(e.target.files[0]);
                                    }
                                }}
                            />

                            {/* Optional preview */}
                            {image && (
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Preview"
                                    className="mt-3 w-40 h-40 object-cover rounded-lg border shadow-sm"
                                />
                            )}
                        </div>
                    </div>




                </div>
            </div>
            <div className='w-full flex flex-wrap justify-end gap-[15px] p-[30px] mt-[40px]'>
                <button className='w-[100px] py-[10px] px-[14px] border-2 border-[#D0D5DD] rounded-[8px] font-semibold font-inter text-[14px] bg-white text-[#344054] hover:cursor-pointer'>
                    Previous
                </button>
                <button
                    onClick={handleSubmit}
                    type='submit'
                    disabled={loading}
                    className='w-[200px] py-[10px] px-[14px] rounded-[8px] font-semibold font-inter text-[14px] bg-[#685BC7] text-white hover:cursor-pointer'
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </div>
        </div>

    )

}

export default Customisespace;
