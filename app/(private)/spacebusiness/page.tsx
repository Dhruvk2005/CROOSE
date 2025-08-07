'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BussinessCategories, GetSpaceId } from '@/app/Apis/publicapi';
import { Description } from '@headlessui/react';
const Spacebusiness = () => {

    const [selectedBusiness, setSelectedBusiness] = useState('');
    const [boxes, setBoxes] = useState<
        { id: number; businessname: string; description: string }[]
    >([]);// top of the component

    // const boxes = [
    //     {
    //         businessname: "Hair Salon",
    //         description: "Accept recurring payments via mobile money. Setup instantly."
    //     },
    //     {
    //         businessname: "Barbershop",
    //         description: "Increase sales with a seamless payment experience."
    //     },
    //     {
    //         businessname: "E-Commerce platform",
    //         description: "Introduce your customers to modern loans on-demand."
    //     },
    //     {
    //         businessname: "Logistics",
    //         description: "Create unique links your customers can pay with via social media or messaging platforms"
    //     },
    //     {
    //         businessname: "Health & Wellness",
    //         description: "Create automated deductions from hundreds of thousands of Government workers in Ghana."
    //     },
    //     {
    //         businessname: "Online Educator",
    //         description: "Link your platform to mobile money wallets and bank accounts seamlessly via a self service portal."
    //     },
    //     {
    //         businessname: "Event Planning & Decorating",
    //         description: "Integrate brand new services for your customers directly onto your mobile app"
    //     },
    //     {
    //         businessname: "Real Estate Agent",
    //         description: "Integrate brand new services for your customers directly onto your mobile app"
    //     },
    //     {
    //         businessname: "Therapist & Counsellor",
    //         description: "Integrate brand new services for your customers directly onto your mobile app"
    //     },
    // ];


    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await BussinessCategories();  // your axios helper
                const data = res?.data;                   // Axios puts JSON here

                // API might return an array directly or wrap it; handle both:
                const arr = Array.isArray(data) ? data : data?.data ?? [];

                // take ONLY name & template (rename for UI)
                const simplified = arr.map((item: any) => ({
                    id: item.id,
                    businessname: item.name,
                    description: item.template,
                }));

                setBoxes(simplified);
            } catch (err) {
                console.error('Failed to load categories', err);
            }
        };
        getCategories();
    }, []);

    const handleSelectSpace = (space: any) => {
        console.log("Selected space:", space);
        localStorage.setItem('spaceDesc', JSON.stringify({
            description: space.description
        }));
        // localStorage.setItem('category', space.businessname);
        localStorage.setItem('categoryID', String(space.id));
          localStorage.setItem('categoryName', space.businessname);

        console.log("saved category:", space.businessname)
        console.log("spaceid:",space.id)
        setSelectedBusiness(space.businessname);
    };


    return (
        <div className='w-full min-h-screen select-none px-[20px] py-[14px]'>
            <div className='w-full flex flex-col items-center gap-[32px]'>

                <div className='flex justify-between w-full border-b-[1px] border-[#EAECF0] pb-[30px]'>
                    <div>
                        <img className='w-[173px] mt-[11px]' src="/Vector.png" alt='crooselogo' />
                    </div>
                    <div className='flex items-center'>
                        <p className='text-white'>Sign Up</p>
                    </div>
                </div>


                <div className='mt-[20px] text-center'>
                    <p className='font-bold text-[28px] text-[#1D2939] font-inter'>What type of business do you have?</p>
                    <p className='text-[#475467] text-[14px] font-inter font-normal'>
                        There are no wrong answers, and you can definitely change your mind later.
                    </p>
                </div>

                <div className='mt-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full max-w-6xl'>
                    {boxes.map((values, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectSpace(values)}
                            className={`
                w-full rounded-[18px] p-[24px] h-[140px] relative flex flex-col justify-between cursor-pointer
                ${selectedBusiness === values.businessname
                                    ? 'bg-[#685BC71F] border-2 border-[#7F56D9]'
                                    : 'bg-[#F2F4F7] border border-transparent'}
              `}
                        >
                            <input
                                type="radio"
                                name="business"
                                checked={selectedBusiness === values.businessname}
                                onChange={() => setSelectedBusiness(values.businessname)}
                                className='w-[16px] h-[20px] accent-[#7F56D9] absolute top-[16px] right-[16px]'
                            />
                            <div className='flex flex-col gap-[8px]'>
                                <p className={`font-semibold text-[16px] font-inter ${selectedBusiness === values.businessname ? 'text-black' : 'text-[black]'}`}>
                                    {values.businessname}
                                </p>
                                <p className={`text-[14px] font-inter font-normal ${selectedBusiness === values.businessname ? 'text-black' : 'text-[black]'}`}>
                                    {values.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className='w-full flex justify-end gap-[20px] mt-[60px]'>
                <Link href={'/dashboard/createnewspace'} >
                <button className='w-[100px] py-[10px] px-[14px] border-2 border-[#D0D5DD] rounded-[8px] font-semibold font-inter text-[14px] bg-[#FFFFFF] text-[#344054 hover:cursor-pointer ]'>
                    Previous
                </button>
                </Link>
                <Link
                    href={"/customisespace"} >

                    <button
                        className={`
    py-[11.5px] px-[14px] w-[200px] rounded-[8px] font-inter text-[14px] hover:cursor-pointer
    ${selectedBusiness
                                ? 'bg-[#685BC7] text-white'
                                : 'bg-[#D0D5DD] text-[#344054] cursor-not-allowed'}
  `}
                        disabled={!selectedBusiness}
                    >
                        Proceed
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Spacebusiness;
