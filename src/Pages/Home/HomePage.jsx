import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

     return (
          <section className="w-full h-screen bg-authCard flex justify-center items-center gap-7 text-melogray">
               <button onClick={() => navigate("/login")} className="px-10 py-3 text-xl border-1 border-melogray rounded-xl hover:text-white hover:scale-105 transition-scale-colors duration-200">Login</button>
               <button onClick={() => navigate("/admin")} className="px-10 py-3 text-xl border-1 border-melogray rounded-xl hover:text-white hover:scale-105 transition-scale-colors duration-200">Admin</button>
          </section>
     );
};

export default HomePage;
