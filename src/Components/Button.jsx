const Button = ({ children, text, onClick, type = "button", disabled = false }) => {
     return (
          <button
               onClick={onClick}
               type={type}
               disabled={disabled}
               className="border-1 border-main/50 box flex items-center gap-2 hover:bg-main transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
               {children}
               <p className="text-gray-300 text-sm tracking-tight cursor-pointer">{text}</p>
          </button>
     );
};

export default Button;

