import React from 'react';

const Customisespace = () => {
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
                            />
                        </div>

                        <div className='flex flex-col gap-[10px]'>
                            <label className='font-medium text-[14px]'>Number</label>
                            <input
                                className='w-full p-[16px] border-2 border-[#D0D5DD] rounded-[16px]'
                                type='text'
                                placeholder='Enter number'
                            />
                        </div>

                        <div className='flex flex-col gap-[10px]'>
                            <label className='font-medium text-[14px]'>Image</label>
                            <input
                                className='w-full text-[grey] p-[16px] border-2 border-[#D0D5DD] rounded-[16px]'
                                type='file'
                            />
                        </div>
                    </div>

                   
                    

                </div>
            </div>
            <div className='w-full flex flex-wrap justify-end gap-[15px] p-[30px] mt-[40px]'>
                        <button className='w-[100px] py-[10px] px-[14px] border-2 border-[#D0D5DD] rounded-[8px] font-semibold font-inter text-[14px] bg-white text-[#344054]'>
                            Previous
                        </button>
                        <button className='w-[200px] py-[10px] px-[14px] rounded-[8px] font-semibold font-inter text-[14px] bg-[#685BC7] text-white'>
                            Submit
                        </button>
                    </div>
        </div>
    )
}

export default Customisespace;
