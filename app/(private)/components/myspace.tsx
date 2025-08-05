'use client'
import React, { useState, useEffect } from 'react'
import Spaceiq from './spaceiq'
import Documentpopup from './documentpopup'
import Spaceiqcolor from './spaceiqcolor'
import Upgradetopro from './upgradetopro'
import Scanqrpage from './scanqr'
import Spacenav from './spacenav'
import { RunAgent, spaceChats, spaceIqCheck, spaceLiveChats, PayApi, InstanceActivationStatus } from "@/app/Apis/publicapi";
import { useParams, useSearchParams } from 'next/navigation';
import { useIq } from '../Iqcontext'
import LiveAgent2 from './liveagent2'
const Myspace = () => {
  const [spaceiqopen, setSpaceiqopen] = useState(false)
  const [docopen, setDocopen] = useState(false)
  const [spaceipcoloropen, setSpaceiqcoloropen] = useState(false)
  const [proopen, setProopen] = useState(false)
  const [scanopen, setScanopen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { iqIncreased, setIqIncreased } = useIq();
  const [spaceChatsData, setSpaceChatsData] = useState<any>()
  const [spaceLiveChatsData, setSpaceLiveChatsData] = useState<any>();
  const [paymentStatus, setPaymentStatus] = useState('');
  const [activationStatus, setActivationStatus] = useState(null);
  const [underReviewPopupOpen, setUnderReviewPopupOpen] = useState(false);
  const [showLiveAgent, setShowLiveAgent] = useState(false);
  const searchParams: any = useSearchParams();
  const id = searchParams.get('id');
  const uuid = searchParams.get('uuid');
  const handleCheck = async () => {
    setLoading(true)
    try {
      const res = await spaceIqCheck({})
      console.log("spaceIqData:", res)
      if (res?.data?.iq_increased === 1) {
        if (iqIncreased !== 1) {
          setIqIncreased(1);
          console.log("iqIncreased set to 1");
        }
      } else {
        if (iqIncreased !== 0) {
          setIqIncreased(0);
          console.log(" iqIncreased set to 0");
        }
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  };
  const spaceName = searchParams.get('name');
  const imageUrl = searchParams.get('image')
  useEffect(() => {
    const fetchSpaceChats = async () => {
      try {
        const res = await spaceChats(Number(id));
        setSpaceChatsData(res);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchSpaceChats();
  }, [id]);

  useEffect(() => {
    const fetchLiveChats = async () => {
      try {
        const res = await spaceLiveChats(Number(id));
        setSpaceLiveChatsData(res);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchLiveChats();
  }, [id]);




  useEffect(() => {
    if (spaceChatsData) {
      console.log("Space Chats Data:", spaceChatsData);
    }
  }, [spaceChatsData]);

  const handleRunAgent = async () => {
    try {
      const response = await RunAgent(id);
      const status = response?.data?.payment_status;
      const instanceActivationStatus = response?.data?.instance_activation_status;

      setActivationStatus(instanceActivationStatus);

      if (instanceActivationStatus === 0) {
        setUnderReviewPopupOpen(true);
        return;
      }

      // Set showLiveAgent to true only if instance_activation_status is 1
      if (instanceActivationStatus === 1) {
        setShowLiveAgent(true);
      }

      if (status === 'success') {
        setScanopen(true);
      } else {
        setProopen(true);
      }

    } catch (err) {
      console.error('Failed to run agent', err);
    }
  };

   useEffect(() => {
    const handleActivationStatus = async () => {
      try {
        let res = await InstanceActivationStatus(id)
        console.log("instance activation status:",res?.data)
        const instanceActivatioValue  = res?.data?.instance_activation_status;
        setActivationStatus(instanceActivatioValue)

    //     if(instanceActivatioValue === 0){
    //       setUnderReviewPopupOpen(true);
    // return;
    //     }

        if(instanceActivatioValue === 1){
            setShowLiveAgent(true);
        }


      }
      catch (err) {
        console.log(err)
      }
    }
    handleActivationStatus()
  },[])
  


  return (
    <div className='select-none' >
      <Spacenav />
      <div className="h-auto w-full bg-[#FFFFFF] relative mt-[15px] flex flex-col gap-5  items-center">
        <div className="w-[100%]  items-center mt-[-17px]   flex flex-row h-[64px] " style={{ borderBottom: "1px solid #EAECF0" }}>
          <img
            src="/arrow.png"
            alt="arrow"
            className="h-[20px] ml-[10px] m-[-1px] w-[20px]"
          />
          <div className="w-[48px] ml-[10px] h-[48px] rounded-full ">

            {imageUrl && (
              <img
                src={decodeURIComponent(imageUrl)}
                alt="Space image"
                className="w-[48px]  h-[48px] rounded-full"
              />
            )}

          </div>
          <div className="w-[50%] sm:w-[70%] text-[13px] sm:text-[1.125rem] text-[#101828] ml-[18px] font-sans font-semibold text-lg leading-7 tracking-normal align-middle h-[28px]">
            {spaceName}
          </div>
          <div className="w-[180px] sm:w-[211px] right-[0px] flex flex-row  gap-[8px] h-[36px]">
            <button className="w-[50%] sm:w-[103px] h-[50px] sm:h-[36px]  flex flex-row border-[white] pt-2 pr-4 pb-2 bg-[#EAECF0] pl-4 gap-[10px] rounded-[8px] ">
              <div onClick={() => {
                setSpaceiqopen(true)
                handleCheck()
              }
              } className="font-sans font-semibold text-[10px]  sm:text-[12px] w-[100%] leading-5 tracking-normal text-center  text-[#685BC7] h-[20px] hover:cursor-pointer">
                Spaces IQ
              </div>
            </button>
            <button onClick={handleRunAgent} className="w-[50%] sm:w-[103px] h-[50px] sm:h-[36px] flex flex-row pt-2 pr-4 pb-2 pl-4 gap-[10px] bg-[#685BC7] rounded-[8px]">
              <div className="w-[100%] font-sans  text-[10px] sm:text-[12px] font-semibold text-sm leading-5 tracking-normal text-center text-[#FFFFFF] h-[50px] sm:h-[20px] hover:cursor-pointer">
                Run Agent
              </div>
            </button>

          </div>
        </div>


        <div className=" flex flex-row flex-wrap gap-[20px] justify-center w-[100%]   rounded-lg">

          <div className="w-[220px] rounded-[16px] border border-gray-300 h-[160px]">
            <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
              <img src="/chat.png" />
              <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                Total Chats
              </div>
            </div>
            <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
              {spaceChatsData?.total_chats}
            </div>
          </div>


          <div className="w-[220px] rounded-[16px] border border-gray-300 h-[160px]">
            <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
              <img src="/message.png" />
              <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                {" "}
                Live Chats
              </div>
            </div>
            <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
              {spaceChatsData?.total_live_chats}
            </div>
          </div>


          <div className="w-[220px] rounded-[16px] border border-gray-300 h-[160px]">
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


          <div className="w-[220px] rounded-[16px] border border-gray-300 h-[160px]">
            <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
              <img src="/party-popper.png" />
              <div className="w-[100%] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                {" "}
                Sales
              </div>
            </div>
            <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
              {spaceChatsData?.total_sales}
            </div>
          </div>
        </div>

        <section className="flex justify-center w-[95%] mt-4">
          {showLiveAgent && activationStatus === 1 ? (
            <LiveAgent2 />
          ) : (
            <div className="w-[89%] h-[486px] bottom-0 rounded-lg border border-[#EAECF0]">
              <div
                className="w-[100%] flex flex-row items-center justify-center gap-[10px] rounded-t-[10px] h-[60px]"
                style={{ borderBottom: '1px solid #EAECF0' }}
              >
                <div className="h-[32px] bg-[#F2F4F7] ml-[5px] border border-[#F2F4F7] p-[8px] flex gap-[10px] rounded-[8px] w-[32px]">
                  <img
                    src="/message-circle.png"
                    alt="circle-sms"
                    className="bg-[#EAECF0] height-[16px] w-[16px] flex rounded-lg"
                  />
                </div>
                <p className="font-sans w-[100%] h-[24px] text-[#101828] font-semibold text-base leading-6 tracking-normal align-middle">
                  Live Chats
                </p>
                <div className="w-[79px] rounded-[8px] border pt-[2px] pr-[4px] pb-[2px] pl-[4px] border-gray-100 gap-[10px] h-[36px]"></div>
              </div>

              <div className="h-[307px] p-[24px] flex justify-center items-center gap-[24px]">
                <div className="w-[256px] h-[208px] flex items-center justify-center flex-wrap rounded-[8px] gap-[20px]">
                  <div className="h-[48px] w-[48px] flex gap-[10px] flex-row bg-[#F2F4F7] rounded-[12px] p-[12px]">
                    <img
                      src="/adda.png"
                      alt="circle-sms"
                      className="h-[24px] w-[24px]"
                    />
                  </div>

                  <div className="h-[84px] gap-[4px] flex flex-col w-[256px]">
                    <div className="w-[256px] h-[20px] text-[#101828] font-sans font-semibold text-sm leading-5 tracking-normal text-center">
                      No live chats yet
                    </div>
                    <div className="w-[256px] text-[#475467] font-sans font-normal text-sm leading-5 tracking-normal text-center align-bottom h-[60px]">
                      Connect your chat accounts, and customize them, to see live
                      chats and conversations
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      // Only allow connecting if activation status is 1
                      if (activationStatus === 1) {
                        setShowLiveAgent(true);
                      } else {
                        // Optionally show a message or trigger the run agent process
                        handleRunAgent();
                      }
                    }}
                    className="w-[150px] flex flex-row rounded-[8px] pt-[8px] pr-[16px] border border-gray-200 pl-[16px] pb-[8px] gap-[10px] bg-[#F2F4F7] h-[36px]"
                  >
                    <div   className="w-[116px] h-[20px] font-sans font-semibold text-sm leading-5 tracking-normal text-center text-[#101828] hover:cursor-pointer">
                      Connect account
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
      {underReviewPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 transition-all duration-300 ease-in-out px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8 sm:p-10 text-center animate-slideUpFade">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              Assistant activation in progress
            </h2>
            <div className="w-8 h-8 border-4 border-indigo-400 border-t-transparent rounded-full mx-auto animate-spin mb-5"></div>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              We're currently reviewing and setting up your space to make sure everything works smoothly.
              This usually takes <span className="font-semibold text-gray-800">less than 24 hours</span>.<br />
              You’ll be notified automatically once it’s all done!
            </p>
            <div className="w-full h-3 bg-gray-200 rounded-full mb-6 overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full animate-pulse" style={{ width: '65%' }}></div>
            </div>

            <div className="text-sm text-gray-500 mb-8 text-left">

            </div>
            <button
              onClick={() => setUnderReviewPopupOpen(false)}
              className="bg-[#685BC7] text-white px-8 py-3 text-sm sm:text-base rounded-full shadow-md hover:bg-[#594ab0] hover:scale-105 transition-transform duration-300"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}



      {spaceiqopen ? <Spaceiq setSpaceiqopen={setSpaceiqopen} setSpaceiqcoloropen={setSpaceiqcoloropen} setDocopen={setDocopen} /> : ""}

      {spaceipcoloropen ? <Spaceiqcolor setSpaceiqcoloropen={setSpaceiqcoloropen} setDocopen={setDocopen} setSpaceiqopen={setSpaceiqopen} /> : ""}

      {docopen ? <Documentpopup setDocopen={setDocopen} /> : ""}

      {proopen ? <Upgradetopro setProopen={setProopen} /> : ""}

      {scanopen ? <Scanqrpage setScanopen={setScanopen} space_id={id} /> : ""}

    </div>

  )
}

export default Myspace
