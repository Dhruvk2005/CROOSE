export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex">
      <div className="bg-[#13102E] w-[272px] h-[900px] max-w-[272px] ">
      <div className="bg-[#13102E] w-[272px] h-[900px] max-w-[272px] fixed">
        <div className="flex w-[272px] h-[76px] justify-left gap-[12px] pt-[24px] pr-[32px] pd-[12px] pl-[32px] items-center " >
          <img className="w-[82.95893096923828px] h-[19.239667892456055px]" src="../logo.png" alt='logo' />
        </div>

        <div className="relative">
          <div className="flex justify-center flex-col items-center gap-[4px] mt-[20px] -ml-[10px]" >
            <ul>
              <li className="flex  w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " ><svg className="w-[20px] h-[15px]  mt-[2.5px] ml-[2.5px]  " width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 1.5H2.33333C1.8731 1.5 1.5 1.8731 1.5 2.33333V6.5C1.5 6.96024 1.8731 7.33333 2.33333 7.33333H6.5C6.96024 7.33333 7.33333 6.96024 7.33333 6.5V2.33333C7.33333 1.8731 6.96024 1.5 6.5 1.5Z" stroke="#F2F4F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.6667 1.5H11.5C11.0398 1.5 10.6667 1.8731 10.6667 2.33333V6.5C10.6667 6.96024 11.0398 7.33333 11.5 7.33333H15.6667C16.1269 7.33333 16.5 6.96024 16.5 6.5V2.33333C16.5 1.8731 16.1269 1.5 15.6667 1.5Z" stroke="#F2F4F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.6667 10.6667H11.5C11.0398 10.6667 10.6667 11.0398 10.6667 11.5V15.6667C10.6667 16.1269 11.0398 16.5 11.5 16.5H15.6667C16.1269 16.5 16.5 16.1269 16.5 15.6667V11.5C16.5 11.0398 16.1269 10.6667 15.6667 10.6667Z" stroke="#F2F4F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.5 10.6667H2.33333C1.8731 10.6667 1.5 11.0398 1.5 11.5V15.6667C1.5 16.1269 1.8731 16.5 2.33333 16.5H6.5C6.96024 16.5 7.33333 16.1269 7.33333 15.6667V11.5C7.33333 11.0398 6.96024 10.6667 6.5 10.6667Z" stroke="#F2F4F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg> <span className=" w-[62px] h-[20px] font-sans font-medium text-[14px] leading-5 align-bottom tracking-normal text-[#F2F4F7] " >Overview</span>
              </li>

              <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " ><svg className="w-[15px] h-[15px]  mt-[2.5px] ml-[2.5px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 16.5L12.9166 12.9166M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#F2F4F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg><span className=" w-[62px] h-[20px] font-sans font-medium text-[14px] leading-5 align-bottom tracking-normal text-[#F2F4F7] ">Modules</span>
              </li>

              <li className=" flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " ><div><svg className="w-[15px] h-[15px] mt-[2.5px] ml-[2.5px]" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.50001 0.666748C7.28667 4.15916 8.64917 5.67018 12.3333 6.50008C8.84092 7.28679 7.32992 8.64925 6.50001 12.3334C5.71334 8.841 4.35084 7.32998 0.666672 6.50008C4.35084 5.67018 5.71334 4.15916 6.50001 0.666748Z" stroke="#F2F4F7" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.83334 1C5.42612 3.63158 6.50543 4.60475 9 5.16667C6.36845 5.75942 5.39527 6.83875 4.83334 9.33333C4.24055 6.70175 3.16125 5.72858 0.666672 5.16667C3.29822 4.57392 4.27141 3.49458 4.83334 1Z" stroke="#F2F4F7" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
                <div>
                  <span className=" w-[62px] h-[20px] font-sans font-medium text-[14px] leading-5 align-bottom tracking-normal text-[#F2F4F7] " >Your Space</span>
                </div>
              </li>

              <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " ><svg className="w-[15px] h-[15px]  mt-[2.5px] ml-[2.5px]" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00001 7.16658V10.4999M15 5.49992V8.83325M14.1667 1.33325C16.2073 1.33325 17.311 1.64555 17.8601 1.88779C17.9332 1.92005 17.9698 1.93618 18.0753 2.03689C18.1386 2.09727 18.2541 2.27441 18.2838 2.35666C18.3333 2.49387 18.3333 2.56887 18.3333 2.71887V11.6759C18.3333 12.4332 18.3333 12.8118 18.2198 13.0065C18.1043 13.2044 17.9928 13.2965 17.7766 13.3726C17.5641 13.4474 17.135 13.3649 16.2768 13.2C15.6762 13.0846 14.9638 12.9999 14.1667 12.9999C11.6667 12.9999 9.16667 14.6666 5.83334 14.6666C3.79275 14.6666 2.68906 14.3543 2.13991 14.112C2.06677 14.0798 2.03021 14.0637 1.92467 13.9629C1.86141 13.9026 1.74594 13.7254 1.71623 13.6432C1.66667 13.506 1.66667 13.431 1.66667 13.281L1.66667 4.32396C1.66667 3.56666 1.66667 3.188 1.78024 2.99337C1.89576 2.79539 2.00716 2.70335 2.22339 2.62726C2.43595 2.55246 2.86503 2.6349 3.7232 2.79979C4.32385 2.9152 5.03624 2.99992 5.83334 2.99992C8.33334 2.99992 10.8333 1.33325 14.1667 1.33325ZM12.0833 7.99992C12.0833 9.15051 11.1506 10.0833 10 10.0833C8.84941 10.0833 7.91667 9.15051 7.91667 7.99992C7.91667 6.84932 8.84941 5.91658 10 5.91658C11.1506 5.91658 12.0833 6.84932 12.0833 7.99992Z" stroke="#F2F4F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg><span className=" w-[62px] h-[20px] font-sans font-medium text-[14px] leading-5 align-bottom tracking-normal text-[#F2F4F7] " >Payments</span>
              </li>

              <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " ><svg className="w-[15px] h-[15px]  mt-[2.5px] ml-[2.5px]" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 10.8334C10.5 10.1704 10.2366 9.53449 9.76776 9.06565C9.29892 8.59681 8.66304 8.33342 7.99999 8.33342M7.99999 8.33342C7.33695 8.33342 6.70107 8.59681 6.23223 9.06565C5.76339 9.53449 5.49999 10.1704 5.49999 10.8334M7.99999 8.33342C8.92047 8.33342 9.66666 7.58722 9.66666 6.66675C9.66666 5.74627 8.92047 5.00008 7.99999 5.00008C7.07952 5.00008 6.33333 5.74627 6.33333 6.66675C6.33333 7.58722 7.07952 8.33342 7.99999 8.33342ZM1.33333 16.2501V3.75008C1.33333 3.19755 1.55282 2.66764 1.94352 2.27694C2.33422 1.88624 2.86413 1.66675 3.41666 1.66675H13.8333C14.0543 1.66675 14.2663 1.75455 14.4226 1.91083C14.5789 2.06711 14.6667 2.27907 14.6667 2.50008V17.5001C14.6667 17.7211 14.5789 17.9331 14.4226 18.0893C14.2663 18.2456 14.0543 18.3334 13.8333 18.3334H3.41666C2.86413 18.3334 2.33422 18.1139 1.94352 17.7232C1.55282 17.3325 1.33333 16.8026 1.33333 16.2501ZM1.33333 16.2501C1.33333 15.6975 1.55282 15.1676 1.94352 14.7769C2.33422 14.3862 2.86413 14.1667 3.41666 14.1667H14.6667" stroke="#F2F4F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg><span className=" w-[62px] h-[20px] font-sans font-medium text-[14px] leading-5 align-bottom tracking-normal text-[#F2F4F7] " >Customers</span>
              </li>

              <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " ><svg className="w-[15px] h-[15px]  mt-[2.5px] ml-[2.5px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.04147 0.0415053H8.95918C8.40514 0.0414757 7.92773 0.0414501 7.54546 0.0928461C7.13576 0.147929 6.74304 0.272144 6.4245 0.590683C6.10596 0.909222 5.98175 1.30194 5.92666 1.71164C5.87527 2.09392 5.87529 2.57131 5.87532 3.12536L5.87533 5.1482C5.67984 5.07911 5.46947 5.04151 5.25033 5.04151H2.75033C1.71479 5.04151 0.875326 5.88097 0.875326 6.91651V16.7082H0.666992C0.321814 16.7082 0.0419922 16.988 0.0419922 17.3332C0.0419922 17.6783 0.321814 17.9582 0.666992 17.9582H17.3337C17.6788 17.9582 17.9587 17.6783 17.9587 17.3332C17.9587 16.988 17.6788 16.7082 17.3337 16.7082H17.1253V11.0832C17.1253 10.0476 16.2859 9.20817 15.2503 9.20817H12.7503C12.5312 9.20817 12.3208 9.24577 12.1253 9.31487L12.1253 3.12537C12.1254 2.57131 12.1254 2.09393 12.074 1.71164C12.0189 1.30194 11.8947 0.909222 11.5761 0.590683C11.2576 0.272144 10.8649 0.147928 10.4552 0.0928461C10.0729 0.0414501 9.59551 0.0414757 9.04147 0.0415053ZM15.8753 16.7082V11.0832C15.8753 10.738 15.5955 10.4582 15.2503 10.4582H12.7503C12.4051 10.4582 12.1253 10.738 12.1253 11.0832V16.7082H15.8753ZM10.8753 16.7082V3.16651C10.8753 2.55958 10.874 2.16726 10.8351 1.8782C10.7987 1.60711 10.7398 1.52214 10.6923 1.47457C10.6447 1.42699 10.5597 1.36815 10.2886 1.3317C9.99957 1.29284 9.60725 1.29151 9.00033 1.29151C8.3934 1.29151 8.00108 1.29284 7.71202 1.3317C7.44093 1.36815 7.35596 1.42699 7.30838 1.47457C7.26081 1.52214 7.20196 1.60711 7.16552 1.8782C7.12665 2.16726 7.12533 2.55958 7.12533 3.16651V16.7082H10.8753ZM5.87533 16.7082V6.91651C5.87533 6.57133 5.5955 6.29151 5.25033 6.29151H2.75033C2.40515 6.29151 2.12533 6.57133 2.12533 6.91651V16.7082H5.87533Z" fill="#F2F4F7" />
              </svg><span className=" w-[62px] h-[20px] font-sans font-medium text-[14px] leading-5 align-bottom tracking-normal text-[#F2F4F7] " >Analytics</span>
              </li>
            </ul>
          </div>
           <section style={{position:"fixed",bottom:"0"}}>
            <div className=" flex justify-center items-center flex-col w-full  gap-[4px] -ml-[12px] " >
              <ul className=" flex flex-col gap-[4px] w-[80%] h-auto " >
                <li className="flex w-[232px] h-auto gap-[8px] pt-[8px] pb-[8px] pl-[12px] pr-[12px] " ><svg className="mt-[1.83px] ml-[1.83px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5145 3.00004L8.46975 1.04479C8.6104 0.904182 8.80113 0.825195 9 0.825195C9.19888 0.825195 9.38961 0.904182 9.53025 1.04479L11.4855 3.00004H14.25C14.4489 3.00004 14.6397 3.07905 14.7803 3.21971C14.921 3.36036 15 3.55112 15 3.75004V6.51453L16.9553 8.46979C17.0959 8.61043 17.1748 8.80116 17.1748 9.00003C17.1748 9.19891 17.0959 9.38964 16.9553 9.53028L15 11.4855V14.25C15 14.4489 14.921 14.6397 14.7803 14.7804C14.6397 14.921 14.4489 15 14.25 15H11.4855L9.53025 16.9553C9.38961 17.0959 9.19888 17.1749 9 17.1749C8.80113 17.1749 8.6104 17.0959 8.46975 16.9553L6.5145 15H3.75C3.55109 15 3.36033 14.921 3.21967 14.7804C3.07902 14.6397 3 14.4489 3 14.25V11.4855L1.04475 9.53028C0.904151 9.38964 0.825165 9.19891 0.825165 9.00003C0.825165 8.80116 0.904151 8.61043 1.04475 8.46979L3 6.51453V3.75004C3 3.55112 3.07902 3.36036 3.21967 3.21971C3.36033 3.07905 3.55109 3.00004 3.75 3.00004H6.5145ZM4.5 4.50003V7.13629L2.63625 9.00003L4.5 10.8638V13.5H7.13625L9 15.3638L10.8638 13.5H13.5V10.8638L15.3638 9.00003L13.5 7.13629V4.50003H10.8638L9 2.63629L7.13625 4.50003H4.5ZM9 12C8.20435 12 7.44129 11.684 6.87868 11.1214C6.31607 10.5587 6 9.79568 6 9.00003C6 8.20438 6.31607 7.44132 6.87868 6.87871C7.44129 6.31611 8.20435 6.00003 9 6.00003C9.79565 6.00003 10.5587 6.31611 11.1213 6.87871C11.6839 7.44132 12 8.20438 12 9.00003C12 9.79568 11.6839 10.5587 11.1213 11.1214C10.5587 11.684 9.79565 12 9 12ZM9 10.5C9.39783 10.5 9.77936 10.342 10.0607 10.0607C10.342 9.77939 10.5 9.39786 10.5 9.00003C10.5 8.60221 10.342 8.22068 10.0607 7.93937C9.77936 7.65807 9.39783 7.50003 9 7.50003C8.60218 7.50003 8.22065 7.65807 7.93934 7.93937C7.65804 8.22068 7.5 8.60221 7.5 9.00003C7.5 9.39786 7.65804 9.77939 7.93934 10.0607C8.22065 10.342 8.60218 10.5 9 10.5Z" fill="#FCFCFD" />
                </svg>
                  Settings</li>
                <li className="flex w-[232px] h-auto gap-[8px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]"><svg className="mt-[1.83px] ml-[1.83px]" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8H4.25C4.64782 8 5.02936 8.15804 5.31066 8.43934C5.59196 8.72064 5.75 9.10218 5.75 9.5V13.25C5.75 13.6478 5.59196 14.0294 5.31066 14.3107C5.02936 14.592 4.64782 14.75 4.25 14.75H2C1.60218 14.75 1.22064 14.592 0.93934 14.3107C0.658035 14.0294 0.5 13.6478 0.5 13.25V8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8V13.25C15.5 13.6478 15.342 14.0294 15.0607 14.3107C14.7794 14.592 14.3978 14.75 14 14.75H11.75C11.3522 14.75 10.9706 14.592 10.6893 14.3107C10.408 14.0294 10.25 13.6478 10.25 13.25V9.5C10.25 9.10218 10.408 8.72064 10.6893 8.43934C10.9706 8.15804 11.3522 8 11.75 8H14C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2ZM2 9.5V13.25H4.25V9.5H2ZM11.75 9.5V13.25H14V9.5H11.75Z" fill="#FCFCFD" />
                </svg>
                  Support</li>
              </ul>
            </div>
          <div className="flex flex-col w-[272px] h-auto p-[12px] gap-[10px] " >
            <hr className="border-[#475467]" ></hr>

            <div className="bg-[#FFFFFF1F] flex w-[248px] h-auto p-[12px] gap-[12px] rounded-[10px] " >
              <div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#EAECF0" />
                  <g filter="url(#filter0_i_2361_12782)">
                    <g clip-path="url(#clip0_2361_12782)">
                      <rect width="40" height="40" rx="20" fill="#EAECF0" />
                      <g filter="url(#filter1_di_2361_12782)">
                        <ellipse cx="20" cy="38" rx="16" ry="12" fill="url(#paint0_radial_2361_12782)" shape-rendering="crispEdges" />
                        <path d="M20 26.5C24.3206 26.5 28.2128 27.8144 31.0137 29.915C33.8143 32.0156 35.5 34.879 35.5 38C35.5 41.121 33.8143 43.9844 31.0137 46.085C28.2128 48.1856 24.3206 49.5 20 49.5C15.6794 49.5 11.7872 48.1856 8.98633 46.085C6.18569 43.9844 4.5 41.121 4.5 38C4.5 34.879 6.18569 32.0156 8.98633 29.915C11.7872 27.8144 15.6794 26.5 20 26.5Z" stroke="url(#paint1_radial_2361_12782)" shape-rendering="crispEdges" />
                      </g>
                      <g filter="url(#filter2_di_2361_12782)">
                        <circle cx="20" cy="16" r="8" fill="url(#paint2_radial_2361_12782)" shape-rendering="crispEdges" />
                        <circle cx="20" cy="16" r="7.5" stroke="url(#paint3_radial_2361_12782)" shape-rendering="crispEdges" />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_i_2361_12782" x="0" y="-8" width="40" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="-8" />
                      <feGaussianBlur stdDeviation="8" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.7712 0 0 0 0 0.78 0 0 0 0 0.7888 0 0 0 0.48 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2361_12782" />
                    </filter>
                    <filter id="filter1_di_2361_12782" x="0" y="18" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.16 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2361_12782" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2361_12782" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="-8" />
                      <feGaussianBlur stdDeviation="4" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2361_12782" />
                    </filter>
                    <filter id="filter2_di_2361_12782" x="8" y="0" width="24" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.16 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2361_12782" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2361_12782" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="-8" />
                      <feGaussianBlur stdDeviation="4" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2361_12782" />
                    </filter>
                    <radialGradient id="paint0_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 26) rotate(90) scale(24 32)">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 26) rotate(90) scale(24 32)">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 8) rotate(90) scale(16)">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint3_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 8) rotate(90) scale(16)">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </radialGradient>
                    <clipPath id="clip0_2361_12782">
                      <rect width="40" height="40" rx="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </div>
              <div className= " flex flex-col w-[136px] h-auto" >
                <p className="font-medium  text-[14px]  " >RoiTech</p>
                <p className="font-normal text-[12px]" >Isaac Onyemah</p>
              </div>
              <div className="flex items-center" >
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.833344 10.5002L5.00001 14.6668L9.16668 10.5002M0.833344 5.50016L5.00001 1.3335L9.16668 5.50016" stroke="#EAECF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
            </div>

          </div>
        </section>
        </div>





      </div>
      </div>

      {/* <div > */}
        <div >
          {children}
        </div>
      {/* </div> */}
    </section>
  );
}
