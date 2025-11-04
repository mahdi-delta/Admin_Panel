const Button = ({children, text, onClick}) => {
     return (
          <button onClick={onClick} className="border-1 border-main/50 box flex items-center gap-2 hover:bg-main transition-colors duration-500">
               {children}
               <p className="text-gray-300 text-sm tracking-tight cursor-pointer">
                    {text}
               </p>
          </button>
     );
};

export default Button;
