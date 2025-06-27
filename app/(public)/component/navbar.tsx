import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = ({show,setShow}:any) => {
  const pathname = usePathname();
  let title= "No path set ";
  if (pathname.includes("appointment"))title = "Appointments"; 

  return (
    <>
      <div className='w-[100%] h-[80px]'>
        <div className={`w-[100%] xl:w-[calc(100%-272px)] h-[64px] border-b-[2px] fixed flex justify-between items-center `} >
          <div className='flex items-center  gap-[20px] text-[#121217] ' onClick={()=>setShow(true)}>
            <svg className=' ml-[7.5px]' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 11L1.5 6L6.5 1" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg><h1 className="text-2xl font-bold ">{title}</h1>

          </div>
          <div className='flex w-[44px] h-[44px] border-[1px] rounded-[8px]  justify-center items-center' >
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.58337 17.5001C7.72286 17.7538 7.92791 17.9654 8.17712 18.1127C8.42632 18.2601 8.71052 18.3379 9.00004 18.3379C9.28956 18.3379 9.57376 18.2601 9.82296 18.1127C10.0722 17.9654 10.2772 17.7538 10.4167 17.5001M4 6.66675C4 5.34067 4.52678 4.0689 5.46447 3.13121C6.40215 2.19353 7.67392 1.66675 9 1.66675C10.3261 1.66675 11.5979 2.19353 12.5355 3.13121C13.4732 4.0689 14 5.34067 14 6.66675C14 12.5001 16.5 14.1667 16.5 14.1667H1.5C1.5 14.1667 4 12.5001 4 6.66675Z" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>

        </div>
        {/* <div className='w-[1168px] h-[900px] ' >
          <div>

          </div>
        </div> */}
      </div>

    </>
  )
}

export default Navbar
