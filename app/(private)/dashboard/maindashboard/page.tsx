'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link';
import { fetchTotalChats, getSpaceList, spaceIqCheck } from '@/app/Apis/publicapi';
import { Nav } from '../../components/nav';
import { useState, useEffect } from 'react'
import { useIq } from '../../Iqcontext';

const slideData = [
  {
    image: "/bag.png",
    name: "Create a space",
    description: "Create a space that fits your business perfectly. Hair Salon or Groomer? We’ve got you, E-Commerce startup? Yes! Let’s go!",
    bg: "#FAEEDC",
    link: "/dashboard/home"
  },
  {
    image: "/brain.png",
    name: "Improve your space IQ",
    description: "Upload price lists, service menus, or FAQs so that your AI can answer questions correctly. The more information you add here, the smarter your assistant becomes!",
    bg: "#FCE1D9",
    link: "/dashboard/space"

  },
  // {
  //   image: "/payment.png",
  //   name: "Enable payments",
  //   description: "Choose Stripe or Mobile Money to receive bookings, invoices and product payments.",
  //   bg: "#E7ECEE",
  //   link:""
  // },
  // {
  //   image: "/email.png",
  //   name: "Verify your email",
  //   description: "It's important we know you're real. Verifying your email address is one of the ways we do this.",
  //   bg: "#E2EBF3",
  //   link:""
  // },
  // {
  //   image: "/bank.png",
  //   name: "Add bank details",
  //   description: "Add your company bank details to the platform. This way your business can get paid refunds or other payments due to you by the platform or your customers.",
  //   bg: "#F0EBE5",
  //   link:""
  // },
];

const MainDashboard = () => {
  const [spacesExist, setSpacesExist] = useState(false);
  const [userdata, setUser] = useState<any>();
  const [currentTime, setCurrentTime] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");


  const { iqIncreased, setIqIncreased } = useIq();

  console.log("MainDashboard iqIncreased value:", iqIncreased);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resSpaces = await getSpaceList();
        const spaces = resSpaces?.data || resSpaces?.spaces || [];
        setSpacesExist(spaces.length > 0);

        const resIq = await spaceIqCheck({});
        console.log('IQ check data:', resIq);
        setSpaceIqCheckData(resIq);


        if (resIq?.iq_increased === 1) {
          setIqIncreased(1);
          console.log("iqIncreased set to 1 in MainDashboard");
        } else {
          setIqIncreased(0);
          console.log("iqIncreased set to 0 in MainDashboard");
        }


      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setIqIncreased]);


  console.log("useIq hook content:", useIq());


  useEffect(() => {
    const storedUser = localStorage.getItem('userdata');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    console.log("✅ iqIncreased updated:", iqIncreased);
  }, [iqIncreased]);



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

  const [spaceIqCheckData, setSpaceIqCheckData] = useState<any>()




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

  const fetchSpaceIq = async () => {
    try {
      const resIq = await spaceIqCheck({});
      console.log('IQ check data:', resIq);
      setSpaceIqCheckData(resIq);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    const iqSetupCompleted = localStorage.getItem('iqSetupCompleted');
    if (iqSetupCompleted === 'true') {
      fetchSpaceIq();
      localStorage.removeItem('iqSetupCompleted');
    }
  }, []);


  const filteredSlideData = slideData.filter(slide => {
    if (slide.name === "Create a space" && spacesExist) {
      return false;
    }
    if (slide.name === "Improve your space IQ" && iqIncreased === 1) {
      return false;
    }
    return true;
  });



     const [customerStatistic, setCustomerStatistic] = useState<any>({});
      useEffect(() => {
          const fetchCustomers = async () => {
              try {
                  let res = await fetchTotalChats()
                  console.log("Customer Statistics:", res)
                  setCustomerStatistic(res)
                  
  
  
              } catch (err) {
                  console.error("Error in Customers component:", err);
              }
          }
          fetchCustomers()
      }, [customerStatistic])

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
            <div className=" flex flex-row flex-wrap gap-[20px]  w-[100%]   rounded-lg">

              <div className="w-[280px] rounded-[16px] border border-gray-300 h-[160px]">
                <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
                  <img src="/chat.png" />
                  <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                    Total Chats
                  </div>
                </div>
                <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
                  0
                </div>
              </div>


              {/* <div className="w-[280px] rounded-[16px] border border-gray-300 h-[160px]">
                <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
                  <img src="/message.png" />
                  <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                    {" "}
                    Live Chats
                  </div>
                </div>
                <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
                  0
                </div>
              </div>


              <div className="w-[280px] rounded-[16px] border border-gray-300 h-[160px]">
                <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
                  <img src="/timer.png" />
                  <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                    {" "}
                    Avg. Response Time
                  </div>
                </div>
                <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
                  0
                </div>
              </div>


              <div className="w-[280px] rounded-[16px] border border-gray-300 h-[160px]">
                <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
                  <img src="/party-popper.png" />
                  <div className="w-[100%] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                    {" "}
                    Sales
                  </div>
                </div>
                <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
                  0
                </div>
              </div> */}
            </div>
          </ul>
        </div>
      </div>


      {iqIncreased === 0 && (
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
        </div>
      )}


      {/* {iqIncreased === 1 && (
        <div className='text-[60px] mt-[60px] w-full h-auto flex justify-center items-center font-semibold text-[purple] ' >Welcome to Croose</div>
      )} */}

      {!loading && filteredSlideData.length > 0 && (
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
    
  );
};

export default MainDashboard;
