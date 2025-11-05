import { useEffect, useRef, useState } from "react";

const AnimatedBorder = ({ borderSize="500", children }) => {
     const [Rect, setRect] = useState([0, 0]);
     const RefCard = useRef(null);

     useEffect(() => {
          const card = RefCard?.current;

          card.addEventListener("mousemove", (e) => {
               const rect = card.getBoundingClientRect();
               const x = e.clientX - rect.left;
               const y = e.clientY - rect.top;
               setRect([x, y]);
          });
     }, []);

     return (
          <div
               ref={RefCard}
               style={{
                    backgroundImage: `radial-gradient(${borderSize}px circle at ${Rect[0]}px ${Rect[1]}px,#7064E9,transparent 40%)`,
               }}
               className="w-max h-max p-[1.5px] flex justify-center items-center relative rounded-xl"
          >
               <div
                    id="container"
                    className="inherit-rounded flex justify-center items-center bg-gray-900"
               >
                    {children}
               </div>
          </div>
     );
};

export default AnimatedBorder;

