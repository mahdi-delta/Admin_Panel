import { useEffect, useRef, useState } from "react";

const AnimatedBorder = ({ borderSize = "500", children }) => {
     const [Rect, setRect] = useState([0, 0]);
     const RefCard = useRef(null);

     useEffect(() => {
          const card = RefCard?.current;

          if (!card) return;

          const handleMouseMove = (e) => {
               const rect = card.getBoundingClientRect();
               const x = e.clientX - rect.left;
               const y = e.clientY - rect.top;
               setRect([x, y]);
          };

          card.addEventListener("mousemove", handleMouseMove);

          // Cleanup function to remove event listener
          return () => {
               card.removeEventListener("mousemove", handleMouseMove);
          };
     }, []);

     return (
          <div ref={RefCard} className="w-full h-max rounded-3xl relative">
               <div
                    style={{
                         background: `radial-gradient(${borderSize}px circle at ${Rect[0]}px ${Rect[1]}px,#7064E9,transparent 40%)`,
                    }}
                    className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none"
               />
               <div className="relative rounded-3xl border-2 border-electric-purple/20 overflow-hidden">
                    {children}
               </div>
          </div>
     );
};

export default AnimatedBorder;
