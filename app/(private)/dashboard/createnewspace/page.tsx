'use client'
import React from 'react'

import Spacenav from '../../components/spacenav';
import { getSpaceList } from '@/app/Apis/publicapi';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState, useEffect } from 'react';

interface Space {
  id: number;
  name: string;
  image?: "spaces/1752839531.jpeg";
  client_name?: string;
  updated_at?: string;
  created_at?: string;
  category?: string;

}


const Newspace = () => {
  const [spaceData, setSpaceData] = useState<Space[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let res = await getSpaceList();

        setSpaceData(res?.data || []);
        console.log("yo", res?.data)
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const IMAGE_BASE_URL = "http://localhost:5000";

  return (
    <div style={{ overflowX: "hidden" }} className='min-h-screen flex flex-col select-none ' >
      <div>
        <Spacenav />
      </div>

      <section className='flex flex-wrap justify-center'>
        <div className='w-[90%] min-h-[100vh] flex flex-col gap-[40px] mt-[30px]'>

          <div className='w-full flex flex-col justify-center -mt-[10px]'>
            <div className='flex justify-between items-center w-[100%] h-auto'>
              <h1 className='text-[#121217] font-[600] text-[24px] font-sans'>
                Assistants you have created
              </h1>
              <ul className='flex gap-[10px] mr-[70px] gap-[20px] items-center'>
                <div className='flex items-center gap-[10px] ' >
                  <li className='flex items-center justify-center gap-[10px] px-[16px] py-[8px] bg-[#F4F4F5] border border-[#E4E4E7] rounded-full font-sans font-[600] text-[14px] text-[#18181B]'>
                    <span>All</span>
                    <Icon icon="charm:tick" width="16" height="16" style={{ color: "black" }} />
                  </li>
                  <li className='text-[#71717A] font-sans font-[600] text-[14px] list-none'>
                    Active
                  </li>
                </div>

                <div className='flex'>
                  <Link
                    href="/spacebusiness"
                  >
                    <button className='flex -mr-[105px] rounded-[8px] bg-[#685BC7] text-[14px] text-white font-[500] items-center pt-[8px] pb-[8px] pr-[16px] pl-[16px] hover:cursor-pointer '>
                      Create New Space
                    </button>
                  </Link>
                </div>

              </ul>


            </div>

          </div>

          <div className='w-full flex flex-col gap-[30px]'>
            <ul className='flex flex-wrap gap-[30px]'>
              {loading ? (
                <p >Loading...</p>
              ) : spaceData.length === 0 ? (
                <p>No spaces found</p>
              ) : (

                spaceData.map((space) => (
                  <Link
                    href={`/dashboard/space?name=${encodeURIComponent(space.name)}&id=${space.id}`}                  >
                    <li
                      key={space.id}
                      className='w-[352px] list-none h-auto rounded-[16px] border-[1px] border-[#EAECF0]'
                    >
                      <div>
                        <div className='flex w-[352px] flex-col relative justify-end p-[20px] w-[289px] rounded-t-[16px] h-[127px] bg-[#9E77ED]'>
                          <ul className='flex -space-x-4 rtl:space-x-reverse'>
                            {/* <li>
                              <img
                                src={space.image_url || "/profile-picture-1.png"}
                                alt={space.name}
                                className='w-10 h-10  rounded-full'
                              />
                            </li>
                            <li>
                              <img
                                src="/profile-picture-2.png"
                                alt="profile2"
                                className='w-10 h-10  rounded-full'
                              />
                            </li>
                            <li>
                              <img
                                src="/profile-picture-3.png"
                                alt="profile3"
                                className='w-10 h-10 rounded-full'
                              />
                            </li> */}
                            <li>
                              <img
                                // src={`${IMAGE_BASE_URL}/${space.image}`}
                                src={space.image}
                                alt={space.image}
                                className='w-[59px] h-[59px] absolute top-[75%] rounded-full'
                              />


                            </li>
                          </ul>
                        </div>
                        <section>
                          <div className='w-[352px] h-auto p-[16px] flex flex-col gap-[16px]'>
                            <div>
                              <ul className='flex justify-between mt-[20px] items-center'>
                                <li className='list-none text-[#1D2939] font-semibold  font-normal text-[14px]'>
                                  {space.name}
                                </li>

                                <li className='flex justify-center items-center list-none w-[50px] h-auto rounded-[12px] border-[1px] border-[#ABEFC6] bg-[#ECFDF3]   text-[#067647] font-400 text-[12px] pt-[1px] pr-[4px] pb-[1px] pl-[4px]'>
                                  <Icon icon="icon-park-outline:dot" width="12" style={{ color: "#17B26A" }} />
                                  Live
                                </li>
                              </ul>

                              <ul>
                                <li className='flex text-[#475467] -mt font-500 text-[12px] font-Inter  '>
                                  {space.category}
                                </li>
                                {/* <li className='flex text-[#0097A7] font-500 text-[12px] font-Inter'>
                                Category
                              </li> */}
                              </ul>
                            </div>

                            <div className='flex gap-[80px] justify-between'>
                              <ul>
                                {/* <img
                                  src="/mainprofile.png"
                                  alt='profile'
                                  className='w-[48px] h-[48px] rounded-full'
                                /> */}
                                <li className='text-[12px] font-normal text-[#667085] font-Inter ' >
                                  <p>Created on</p>
                                  <p className='text-[#101828]  ' >{space.created_at}</p>
                                </li>
                              </ul>
                              <ul className='flex flex-col gap-[8px]'>

                                <li className='text-[12px] font-normal text-[#667085] font-Inter'>
                                  <p>Last update</p>
                                  <p className='text-[#101828]  ' >{space.updated_at}</p>
                                </li>
                              </ul>
                            </div>
                          </div>


                        </section>

                      </div>
                    </li>
                  </Link>
                ))
              )}
{loading ? (
  <div>
    <span className="text-gray-500"></span> 
  </div>
) : (
  <Link href="/spacebusiness">
    <div className="bg-[#F4F4F5] border-[1px] border-[#EAECF0] flex justify-center items-center rounded-[16px] w-[352px] h-[270px] hover:cursor-pointer">
      <div className="flex-col h-auto">
        <Icon
          className="ml-6"
          icon="bitcoin-icons:plus-filled"
          width="24"
          height="24"
          style={{ color: "#020617" }}
        />
        <p className="text-[#1D2939] mt-[10px] text-center font-Inter font-semibold text-[14px]">
          New Space
        </p>
      </div>
    </div>
  </Link>
)}

    </ul>


          </div >

        </div >
      </section >

    </div >
  )
}

export default Newspace