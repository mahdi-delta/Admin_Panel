import { useNavigate } from "react-router-dom";

const HomePage = () => {
     const navigate = useNavigate();

     return (
          <section className="w-full h-screen bg-gradient-to-br from-void via-midnight to-void flex flex-col justify-center items-center gap-10 text-slate relative overflow-hidden">
               {/* Animated Background Elements */}
               <div className="absolute top-20 left-20 w-96 h-96 bg-electric-purple/8 rounded-full blur-3xl animate-pulse"></div>
               <div
                    className="absolute bottom-20 right-20 w-96 h-96 bg-cosmic-purple/8 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
               ></div>
               <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-purple/3 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "0.5s" }}
               ></div>

               {/* Main Content */}
               <div className="z-10 flex flex-col items-center gap-6 text-center px-4">
                    {/* Logo/Title */}
                    <h1 className="text-7xl max-sm:text-5xl font-bold bg-gradient-to-r from-electric-purple via-cosmic-purple to-electric-purple bg-clip-text text-transparent animate-fade-in">
                         Admin Panel
                    </h1>

                    {/* Subtitle */}
                    <p
                         className="text-xl max-sm:text-lg text-slate/70 max-w-2xl animate-fade-in"
                         style={{ animationDelay: "0.2s" }}
                    >
                         Modern and stylish admin dashboard with elegant design
                    </p>

                    {/* Features */}
                    <div
                         className="flex gap-6 max-sm:flex-col text-sm mt-4 animate-fade-in text-slate/80"
                         style={{ animationDelay: "0.3s" }}
                    >
                         <div className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-electric-purple rounded-full animate-pulse"></span>
                              <span>User Management</span>
                         </div>
                         <div className="flex items-center gap-2">
                              <span
                                   className="w-2 h-2 bg-cosmic-purple rounded-full animate-pulse"
                                   style={{ animationDelay: "0.2s" }}
                              ></span>
                              <span>Real-time Data</span>
                         </div>
                         <div className="flex items-center gap-2">
                              <span
                                   className="w-2 h-2 bg-electric-purple rounded-full animate-pulse"
                                   style={{ animationDelay: "0.4s" }}
                              ></span>
                              <span>Responsive Design</span>
                         </div>
                    </div>
               </div>

               {/* Action Buttons */}
               <div
                    className="z-10 flex gap-6 max-sm:flex-col animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
               >
                    <button
                         onClick={() => navigate("/login")}
                         className="group relative px-10 py-3 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(112,100,233,0.4)] border-2 border-electric-purple/40 hover:border-electric-purple/80 backdrop-blur-sm bg-midnight/70"
                    >
                         <span className="relative z-30 flex items-center gap-2">
                              <span className="text-xl">👤</span>
                              Login
                         </span>

                         {/* Inner glow effect */}
                         <span className="absolute inset-[2px] bg-gradient-to-br from-midnight/90 via-shadow/80 to-void/90 rounded-xl z-10"></span>

                         {/* Sweep light effect */}
                         <span className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-electric-purple/15 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out z-20"></span>
                    </button>

                    <button
                         onClick={() => navigate("/admin")}
                         className="group relative px-10 py-3 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(122,53,201,0.4)] border-2 border-cosmic-purple/40 hover:border-cosmic-purple/80 backdrop-blur-sm bg-midnight/70"
                    >
                         <span className="relative z-30 flex items-center gap-2">
                              <span className="text-xl">⚡</span>
                              Admin Panel
                         </span>

                         {/* Inner dark background */}
                         <span className="absolute inset-[2px] bg-gradient-to-br from-midnight/90 via-shadow/80 to-void/90 rounded-xl z-10"></span>

                         {/* Animated accent on hover */}
                         <span className="absolute inset-0 bg-gradient-to-r from-cosmic-purple/8 to-electric-purple/8 opacity-0 group-hover:opacity-100 transition-all duration-500 z-15"></span>

                         {/* Sweep light effect */}
                         <span className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-cosmic-purple/15 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out z-20"></span>
                    </button>
               </div>

               {/* Footer Info */}
               <div className="z-10 absolute bottom-8 flex flex-col items-center gap-2 text-sm text-slate/50">
                    <p>Built with React + Vite + TailwindCSS</p>
                    <a
                         href="https://github.com/mahdi-delta"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-electric-purple/70 hover:text-electric-purple transition-colors duration-300 flex items-center gap-2"
                    >
                         <span>👨‍💻</span>
                         <span>@mahdi-delta</span>
                    </a>
               </div>
          </section>
     );
};

export default HomePage;
