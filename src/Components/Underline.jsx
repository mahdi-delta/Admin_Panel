const Underline = ({ children, fontSize = "16px" }) => {
     return (
          <p
               style={{ fontSize: fontSize }}
               className="text-gray-300 relative border-b-2 border-shadow after:transition-colors
               after:duration-300 after:absolute after:content-[''] after:left-0 after:-bottom-1 after:w-0 transition-colors duration-300 hover:text-electric-purple/80
               after:h-[2px] after:bg-electric-purple hover:after:animate-OpenUnderline cursor-pointer font-semibold"
          >
               {children}
          </p>
     );
};

export default Underline;
