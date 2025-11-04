const Button = ({text, onClick}) => {
     return (
          <button onClick={onClick} className="relative cursor-pointer py-2 px-9   text-center font-barlow inline-flex justify-center text-base uppercase text-white/80 rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
               <span className="relative z-20">{text}</span>
               <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-logoPurple/50 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-h-colors duration-1000 ease-in-out" />
               <span className="w-1/2 drop-shadow-3xl transition-h-colors duration-300 block border-logoPurple absolute h-[20%] rounded-tl-lg border-l-1 border-t-1 top-0 left-0" />
               <span className="w-1/2 drop-shadow-3xl transition-h-colors duration-300 block border-logoPurple absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-1 border-t-1 top-0 right-0" />
               <span className="w-1/2 drop-shadow-3xl transition-h-colors duration-300 block border-logoPurple absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-1 border-b-1 left-0 bottom-0" />
               <span className="w-1/2 drop-shadow-3xl transition-h-colors duration-300 block border-logoPurple absolute h-[20%] rounded-br-lg border-r-1 border-b-1 right-0 bottom-0" />
          </button>
     );
};

export default Button;
