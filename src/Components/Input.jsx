const Input = ({ type, placeHolder, children = "", onChange = null, required = false }) => {
     return (
          <div
               onChange={onChange}
               className=" bg-midnight flex justify-start items-center gap-3 box w-full transition-ring-colors duration-400 focus-within:ring-1 focus-within:ring-electric-purple group"
          >
               {children}
               <input
                    type={type}
                    placeholder={placeHolder}
                    required={required}
                    className="w-full border-none outline-none placeholder:text-slate text-gray-400 peer"
               />
          </div>
     );
};

export default Input;
