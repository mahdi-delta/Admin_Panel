const SvgWidget = ({className}) => {
     return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
               <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
               <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect x="2" y="3" width="20" height="9" rx="2" ></rect>{" "}
                    <path
                         d="M16 18V18C16 19.1046 15.1046 20 14 20H10C8.89543 20 8 19.1046 8 18V18"
                    ></path>{" "}
                    <path
                         d="M19 14V14C19 15.1046 18.1046 16 17 16H7C5.89543 16 5 15.1046 5 14V14"
                    ></path>{" "}
               </g>
          </svg>
     );
};

export default SvgWidget;
