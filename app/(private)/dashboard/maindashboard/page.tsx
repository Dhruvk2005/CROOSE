'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link';
import { getSpaceList } from '@/app/Apis/publicapi';
import { Nav } from '../../components/nav';
import {useState, useEffect} from 'react'

const slideData = [
  {
    image: "/bag.png",
    name: "Create a space",
    description: "Create a space that fits your business perfectly. Hair Salon or Groomer? We’ve got you, E-Commerce startup? Yes! Let’s go!",
    bg: "#FAEEDC",
    link:"/dashboard/home"
  },
  {
    image: "/brain.png",
    name: "Improve your space IQ",
    description: "Upload price lists, service menus, or FAQs so that your AI can answer questions correctly. The more information you add here, the smarter your assistant becomes!",
    bg: "#FCE1D9",
    link:""
  },
  {
    image: "/payment.png",
    name: "Enable payments",
    description: "Choose Stripe or Mobile Money to receive bookings, invoices and product payments.",
    bg: "#E7ECEE",
    link:""
  },
  {
    image: "/email.png",
    name: "Verify your email",
    description: "It's important we know you're real. Verifying your email address is one of the ways we do this.",
    bg: "#E2EBF3",
    link:""
  },
  {
    image: "/bank.png",
    name: "Add bank details",
    description: "Add your company bank details to the platform. This way your business can get paid refunds or other payments due to you by the platform or your customers.",
    bg: "#F0EBE5",
    link:""
  },
];

const MainDashboard = () => {
  const [spacesExist, setSpacesExist] = useState(false);
  const [userdata, setUser] = useState<any>();
  const [currentTime, setCurrentTime] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");


  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const res = await getSpaceList();
        console.log("Fetched spaces in dashboard:", res);

        const spaces = res?.data || res?.spaces || [];

        if (spaces.length > 0) {
          setSpacesExist(true);
        } else {
          setSpacesExist(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchSpaces();
  }, []);



  useEffect(() => {
    const storedUser = localStorage.getItem('userdata');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      // Format time
      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleString('en-US', options));

      const hour = now.getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting("Good Morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good Afternoon");
      } else if (hour >= 17 && hour < 20) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Night");
      }

    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const [loading, setLoading] = useState(true);


useEffect(() => {
  const fetchSpaces = async () => {
    try {
      const res = await getSpaceList();
      const spaces = res?.data || res?.spaces || [];
      setSpacesExist(spaces.length > 0);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  fetchSpaces();
}, []);

  const filteredSlideData = slideData.filter(slide => {
    if (slide.name === "Create a space" && spacesExist) {
      return false;
    }
    return true;
  });

  return (

    <div className='w-full  '>

      <div className='w-full py-[18px] px-[24px] h-[64px] flex justify-between items-center border-b-2 border-[#EAECF0]'>
        <div className='text-[#121217] text-[18px] font-semibold font-sans'>Overview</div>
        <div className='border-2 border-[#EAECF0] rounded-[8px] p-[10px]'>
          <Icon icon="mdi-light:bell" width="24" height="24" style={{ color: "#475467" }} />
        </div>
      </div>

      {/* Greetings and Stats */}
      <div className='w-full h-auto px-[24px] py-[40px] gap-[20px] flex flex-col'>
        <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-[10px]'>
          <ul>             <li className='font-sans text-[18px] text-[#1D2939] font-semibold'>{greeting}, {userdata?.data?.name}</li>
            <li className='text-[#667085] font-normal'>{currentTime}</li>
          </ul>
          {/* <ul className='flex gap-[8px] items-center'>
            <li className='flex justify-center w-[60px] bg-[#F1F0FA] text-[#685BC7] py-[8px] px-[16px] rounded-[8px]'>CTA</li>
            <li className='flex justify-center w-[60px] bg-[#685BC7] text-[#F1F0FA] py-[8px] px-[16px] rounded-[8px]'>CTA</li>
          </ul> */}
        </div>

        {/* Stat cards */}
        <div className='w-full h-auto'>
          <ul className='w-full h-auto flex flex-wrap gap-[16px]'>
            {[1, 2, 3, 4].map((item, idx) => (
              <li key={idx} className='w-full sm:w-[48%] lg:w-[24%] h-[160px] border-2 border-[#EAECF0] rounded-[16px]'>
                <div className='w-full font-sans flex gap-[8px] p-[12px] items-center h-[44px] border-b-2 border-[#EAECF0] text-[12px] font-semibold text-[#475467]'>
                  <Icon icon="humbleicons:chat" width="24" height="24" style={{ color: "#475467" }} />Total Chats
                </div>
                <div className='flex h-[116px] text-[36px] justify-center items-center text-black font-bold'>0</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Complete Setup Slider */}
      <div>
        <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between px-[24px]'>
          <div>
            <p className='font-sans text-[#1D2939] text-[18px] font-semibold'>Complete Setup</p>
            <p className='text-[#667085] text-[14px] font-normal'>
              Complete these simple steps to get your business live. You only have to do this once.
            </p>
          </div>
          <div>
            <ul className='gap-[10px] flex items-center mt-[10px] md:mt-0'>
              <li className='flex items-center w-[40px] border-[1px] border-[#EAECF0] rounded-[8px] p-[10px]'>
                <Icon icon="iconamoon:arrow-left-2-duotone" width="24" height="24" />
              </li>
              <li className='flex items-center w-[40px] border-[1px] border-[#EAECF0] rounded-[8px] p-[10px]'>
                <Icon icon="iconamoon:arrow-right-2-duotone" width="24" height="24" />
              </li>
            </ul>
          </div>
        </div>

       {!loading && (
  <div className='w-full px-[24px] py-[30px]'>
    <ul className='w-full flex flex-wrap gap-[16px]'>
      {filteredSlideData.map((values: any, index) => (
        <li key={index} className='w-full sm:w-[280px] rounded-[16px] h-[380px] border-[1px] border-[#EAECF0] bg-white flex flex-col justify-between'>
          {/* your card content here */}
          <div>
            <div
              className='w-full h-[120px] rounded-t-[12px] p-[20px] flex items-center'
              style={{ backgroundColor: values.bg }}
            >
              {values.image ? (
                <img
                  className='w-[100px] h-[100px] object-contain'
                  src={values.image}
                  alt={values.name}
                />
              ) : (
                <div className='w-[40px] h-[40px] bg-gray-300 rounded'></div>
              )}
            </div>
            <div className='p-[20px] flex flex-col gap-[5px]'>
              <p className='text-[#1D2939] font-semibold font-Archivo'>{values.name}</p>
              <p className='text-[#667085] text-[14px]'>{values.description}</p>
            </div>
          </div>
          <div className='p-[20px]'>
            <Link href={values.link}>
              <button className='py-[8px] px-[16px] bg-[#F2F4F7] rounded-[8px]'>Proceed</button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
)}

      </div>
    </div>
  );
};

export default MainDashboard;
