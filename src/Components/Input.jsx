const Input = ({ type, placeHolder, children = "", onChange = null }) => {
     return (
          <div
               onChange={onChange}
               className="flex justify-start items-center gap-3 box w-full transition-ring-colors duration-400 focus-within:ring-1 focus-within:ring-electric-purple group"
          >
               {children}
               <input
                    type={type}
                    placeholder={placeHolder}
                    className="w-full border-none outline-none placeholder:text-slate text-gray-400 peer"
               />
          </div>
     );
};

export default Input;
