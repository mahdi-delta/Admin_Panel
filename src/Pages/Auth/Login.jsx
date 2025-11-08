import { useState } from "react";
import SvgEmail from "../../assets/Icons/LoginPage/SvgEmail";
import SvgLock from "../../assets/Icons/LoginPage/SvgLock";
import Input from "../../Components/Input";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AnimatedBorder from "../../Components/AnimatedBorder";

const Login = () => {
     const navigate = useNavigate();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const handleSubmit = (e) => {
          e.preventDefault();

          if (!email || !password) {
               toast.error("Please fill in all fields");
               return;
          }

          toast.success("Login successful! 🎉");
          setTimeout(() => {
               navigate("/admin");
          }, 1000);
     };

     return (
          <div className="min-h-screen bg-gradient-to-br from-void via-midnight to-void flex items-center justify-center px-4 py-8 relative overflow-hidden">
               {/* Animated Background Elements */}
               <div className="absolute top-20 left-10 w-96 h-96 bg-electric-purple/8 rounded-full blur-3xl animate-pulse"></div>
               <div className="absolute bottom-20 right-10 w-96 h-96 bg-cosmic-purple/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-purple/8 rounded-full blur-3xl animate-pulse delay-500"></div>

               {/* Decorative Boxes - Left */}
               <span className="absolute left-4 md:left-50 top-1/4 border-electric-purple/40 border-2 w-28 h-44 md:w-36 md:h-60 rounded-3xl shadow-[0_0_120px_8px_rgba(112,100,233,0.3)] skew-y-8 hidden sm:block group">
                    {/* Geometric shapes inside */}
                    <span className="absolute top-8 left-8 w-14 h-14 border-2 border-electric-purple/70 rounded-lg rotate-45 shadow-[0_0_15px_rgba(112,100,233,0.6)]"></span>
                    <span className="absolute bottom-10 right-8 w-10 h-10 bg-cosmic-purple/40 rounded-full shadow-[0_0_20px_rgba(122,53,201,0.7)]"></span>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-shadow/70 rounded-full shadow-[0_0_15px_rgba(39,40,56,0.6)]"></span>
               </span>

               {/* Decorative Boxes - Right */}
               <span className="absolute right-4 md:right-50 top-1/3 border-cosmic-purple/40 border-2 w-28 h-44 md:w-36 md:h-60 rounded-3xl shadow-[0_0_120px_8px_rgba(122,53,201,0.3)] -skew-y-8 hidden sm:block group">
                    {/* Geometric shapes inside */}
                    <span className="absolute top-10 right-8 w-12 h-12 border-2 border-cosmic-purple/70 rotate-12 shadow-[0_0_15px_rgba(122,53,201,0.6)]"></span>
                    <span className="absolute bottom-10 left-8 w-9 h-9 bg-electric-purple/40 rounded-full shadow-[0_0_20px_rgba(112,100,233,0.7)]"></span>
                    <span className="absolute top-1/3 left-1/3 w-7 h-7 border-2 border-shadow/70 shadow-[0_0_15px_rgba(39,40,56,0.6)]"></span>
               </span>
               {/* Main Content */}
               <div className="w-full max-w-md relative z-10">
                    <AnimatedBorder borderSize="600">
                         <div className="bg-midnight/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl w-full">
                              {/* Header */}
                              <div className="text-center mb-8">
                                   <h1 className="text-3xl font-bold bg-gradient-to-r from-electric-purple via-cosmic-purple to-electric-purple bg-clip-text text-transparent mb-2">
                                        Welcome Back
                                   </h1>
                                   <p className="text-slate text-sm">Sign in to your account</p>
                              </div>

                              {/* Form */}
                              <form onSubmit={handleSubmit} className="space-y-4 relative">
                                   <Input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeHolder="Enter Your Email"
                                   >
                                        <SvgEmail className="w-5 h-5 fill-slate/50 group-focus-within:fill-electric-purple transition-colors duration-300" />
                                   </Input>

                                   <Input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeHolder="Enter Your Password"
                                   >
                                        <SvgLock className="w-5 h-5 stroke-slate/50 group-focus-within:stroke-electric-purple transition-colors duration-300" />
                                   </Input>

                                   <div className="flex justify-end">
                                        <button
                                             type="button"
                                             className="text-sm text-electric-purple/70 hover:text-electric-purple transition-colors duration-300"
                                        >
                                             Forgot Password?
                                        </button>
                                   </div>

                                   <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-electric-purple via-cosmic-purple to-electric-purple hover:shadow-lg hover:shadow-cosmic-purple/50 transition-all duration-300 "
                                   >
                                        Sign In
                                   </button>

                                   <p className="text-center text-slate text-sm">
                                        Don't have an account?{" "}
                                        <button
                                             type="button"
                                             onClick={() => navigate("/register")}
                                             className="text-electric-purple hover:text-cosmic-purple transition-colors duration-200 font-medium"
                                        >
                                             Sign Up
                                        </button>
                                   </p>
                              </form>
                         </div>
                    </AnimatedBorder>

                    {/* Back to Home button */}
                    <button
                         onClick={() => navigate("/")}
                         className="w-full mt-6 py-3 rounded-3xl font-medium text-slate hover:text-white bg-shadow/50 hover:bg-shadow/80 backdrop-blur-sm border border-electric-purple/20 hover:border-electric-purple/40 transition-all duration-300"
                    >
                         Back to Home
                    </button>
               </div>
          </div>
     );
};

export default Login;
