'use client'
import Link from 'next/link'
import Documentpopup from './documentpopup'
const Spaceiqcolor = (props: any) => {



  return (
    <div>
      <div className="relative  z-[40]">
        <div className="fixed inset-0 bg-[#18181B66] transition-opacity flex justify-center items-center">
          <div className="w-full flex justify-center   px-4 sm:px-6">
            <div className="w-full max-w-4xl h-[700px]  flex flex-col items-center border-2 border-[#EAECF0] rounded-2xl bg-white">


              <div className="w-[97%] h-[100px] flex text-center p-[10px]  items-center justify-between ">
                <img src="/arrow-left.png" className="h-5 w-5" />
                <div className="text-white font-sans font-semibold text-xl leading-none tracking-tight text-center">
                  Scan QR code
                </div>
                <img onClick={() => props.setSpaceiqcoloropen(false)} src="/x.png" className="h-5 w-5" />
              </div>

              <div className="bg-white flex flex-col border-b px-4 pb-12 gap-8 w-full items-center">


                <div className="w-full h-[100px]  flex flex-col justify-center items-center gap-2 text-center">
                  <img src="/Frame.png" className="w-[105px] h-[16px] flex gap-[4px]" />
                  <span className="text-[#121217] font-sans font-semibold text-xl leading-none tracking-tight">
                    Increase Space IQ
                  </span>
                  <span className="text-[#475467] font-sans text-sm leading-5 w-full sm:w-[47%]">
                    Set custom instructions and guidance for the agent to follow. Enter plain text, upload or link documents.
                  </span>
                </div>


                <div className=" sm:w-[80%] h-[396px]  flex flex-col items-center px-4 py-6 rounded-lg gap-6">


                  <div className="w-[80%] h-[186px] items-center flex  flex-col gap-3">
                    <span className="text-[#18181B] font-sans font-medium text-base leading-6">
                      Plain Text
                    </span>

                    <div className="w-[80%] h-[150px] rounded-xl border-[#EAECF0] border-2 p-4   flex flex-col gap-3 text-[#101828]">

                      <div className="w-[100%]  h-[216px] font-sans font-normal text-[15px] leading-5 tracking-normal overflow-y-auto ">
                        <ul className="list-disc">
                          <p>
                            You are Sasha, the official WhatsApp assistant for Hair Senta, a beauty and haircare brand. Your job is to engage in friendly, helpful, and intelligent conversation with customers who are looking to buy hair products or book appointments. You must respond naturally to any message, without using rigid menus.

                            🎯 GOAL
                            Your goal is to help users:

                            Explore and purchase hair products

                            Book salon or hair styling appointments

                            Answer questions about styles, product care, and availability

                            Make payments via mobile money or card (Stripe)

                            👋 GREETING
                            When a customer messages for the first time or re-engages, greet them warmly and encourage open conversation:

                            “Hi! 👋 Welcome to Hair Senta. How can I assist you today? Feel free to ask anything — whether you’re exploring styles, products, or booking an appointment!”

                            💬 HOW TO RESPOND
                            Always listen for natural input — don’t send a menu or numbered list. Respond to messages like:

                            “I want to buy a wig”

                            “Can I book braids Friday?”

                            “Do you have curly extensions?”

                            Be conversational, helpful, and always guide them toward completing a purchase or booking.

                            🛍 IF THEY WANT TO BUY A PRODUCT
                            If a customer wants to buy a product, follow this flow:

                            Ask:

                            “Awesome! What type of hair product are you looking for?”

                            Then:

                            “Do you know the length, colour, or style you’re after?”

                            Then:

                            “Where should we deliver your order?”

                            Use the uploaded price/product document to suggest available products that match.

                            Show product(s) and price(s).

                            Ask:

                            “Would you like to pay by Mobile Money or Card?”

                            Generate a payment link (Momo or Stripe) and confirm after payment.

                            ✂ IF THEY WANT TO BOOK AN APPOINTMENT
                            If a customer wants to book an appointment, follow this flow:

                            Ask:

                            “Great! What service would you like and when?”

                            Then:

                            “Do you have a preferred style, colour, or length?”

                            Use the uploaded services/pricing document to confirm available services and pricing.

                            Ask:

                            “Would you like to pay a deposit or in full?”

                            Generate a payment link (Momo or Stripe) and confirm booking after payment.

                            💡 AT ANY TIME
                            Encourage questions or provide recommendations:

                            “Do you have any questions before we proceed? Happy to help with recommendations, styles, or care tips.”

                            🚫 IF YOU DON’T KNOW SOMETHING
                            Use this fallback:

                            “Let me check this for you and get right back to you!”

                            🔁 IMPORTANT REMINDERS
                            Do not use menus or list options. Respond naturally to free text.

                            Be helpful, polite, and confident in guiding users.

                            Use product and service documents to inform your responses.

                            Always offer a payment link when the user is ready.

                            You are Sasha — smart, stylish, and always helpful 💁🏽‍♀✨.

                          </p>
                        </ul>
                      </div>

                    </div>

                  </div>


                  <div className="w-[70%]">
                    <img src="/Line 10.png" alt="line" className="w-[90%]" />
                  </div>


                  <div className="w-[80%] h-[116px] items-center flex flex-col gap-3">
                    <span className="text-[#18181B] h-[24px] font-sans font-medium text-base leading-6">
                      Documents
                    </span>




                    <div className="w-[80%] max-h-[56px] rounded-lg border-[#EAECF0] border-2  bg-[#ffffff]   flex flex-col gap-2 ">
                      <div className="w-full max-w-md mx-auto px-4 py-2 bg-[#ffffff]   rounded-lg flex flex-col sm:flex-row sm:justify-between items-center text-center gap-2">
                        <span className="font-sans font-semibold text-sm mt-[8px] leading-6 tracking-normal text-[#101828]">
                          4 documents added
                        </span>
                        <span className="flex flex-row items-center justify-center gap-1">
                          <span className="font-sans font-normal text-sm mt-[8px] leading-6 tracking-normal text-[#475467]">
                            See files
                          </span>
                          <img className="w-4 h-4" src="/files.png" alt="Files icon" />
                        </span>
                      </div>






                      <div>
                        <Link
                          href={""}
                          className='text-[#685BC7]  '
                          onClick={() => props.setDocopen(true)}
                        >
                          Add more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="w-[55%] ml-6 flex flex-col gap-[7px] sm:flex-row items-center  gap-[8px] px-4">
                  <button onClick={() => {
                    props.setDocopen(false);
                    props.setSpaceiqcoloropen(false);
                    props.setSpaceiqopen(false);
                    props.setProopen(true);
                  }} className=" w-[70%] py-2 bg-[#685BC7] text-white font-sans font-semibold text-sm rounded-md text-center">
                    Finish
                  </button>
                  <button className=" w-[23%] py-2 border border-zinc-200 bg-[#F4F4F5] text-[#685BC7] font-sans font-semibold text-sm rounded-md text-center">
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Spaceiqcolor
