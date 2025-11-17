import { useState } from "react";
import SvgEmail from "../../assets/Icons/LoginPage/SvgEmail";
import SvgLock from "../../assets/Icons/LoginPage/SvgLock";
import SvgName from "../../assets/Icons/LoginPage/SvgName";
import Input from "../../Components/Input";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AnimatedBorder from "../../Components/AnimatedBorder";

const Register = () => {
     const navigate = useNavigate();
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");

     const handleSubmit = (e) => {
          e.preventDefault();

          // Check if all fields are filled
          if (!name || !email || !password || !confirmPassword) {
               toast.error("Please fill in all fields");
               return;
          }

          // Validate name (at least 3 characters, only letters and spaces)
          if (name.trim().length < 3) {
               toast.error("Name must be at least 3 characters long");
               return;
          }

          if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
               toast.error("Name can only contain letters and spaces");
               return;
          }

          // Validate email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
               toast.error("Please enter a valid email address");
               return;
          }

          // Validate password length
          if (password.length < 6) {
               toast.error("Password must be at least 6 characters long");
               return;
          }

          // Validate password match
          if (password !== confirmPassword) {
               toast.error("Passwords don't match!");
               return;
          }

          toast.success("Account created successfully!");
          setTimeout(() => navigate("/login"), 1500);
     };

     return (
          <div className="min-h-screen bg-gradient-to-br from-void via-midnight to-void flex items-center justify-center px-4 py-8 relative overflow-hidden">
               {/* Animated background orbs */}
               <div className="absolute top-20 left-10 w-96 h-96 bg-electric-purple/8 rounded-full blur-3xl animate-pulse" />
               <div className="absolute bottom-20 right-10 w-96 h-96 bg-cosmic-purple/8 rounded-full blur-3xl animate-pulse delay-1000" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-purple/8 rounded-full blur-3xl animate-pulse delay-500" />

               {/* Decorative Boxes - Left */}
               <span className="absolute left-4 md:left-50 top-1/4 border-electric-purple/40 border-2 w-28 h-44 md:w-36 md:h-60 rounded-3xl shadow-[0_0_120px_8px_rgba(112,100,233,0.3)] skew-y-8 hidden sm:block group transition-all duration-500 hover:scale-110 hover:border-electric-purple/70 hover:shadow-[0_0_160px_12px_rgba(112,100,233,0.5)] hover:-skew-y-6 cursor-pointer">
                    {/* Geometric shapes inside */}
                    <span className="absolute top-8 left-8 w-14 h-14 border-2 border-electric-purple/70 rounded-lg rotate-45 shadow-[0_0_15px_rgba(112,100,233,0.6)] transition-all duration-500 group-hover:rotate-90 group-hover:scale-110 group-hover:border-electric-purple group-hover:shadow-[0_0_25px_rgba(112,100,233,0.9)]"></span>
                    <span className="absolute bottom-10 right-8 w-10 h-10 bg-cosmic-purple/40 rounded-full shadow-[0_0_20px_rgba(122,53,201,0.7)] transition-all duration-500 group-hover:scale-125 group-hover:bg-cosmic-purple/60 group-hover:shadow-[0_0_30px_rgba(122,53,201,1)]"></span>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-shadow/70 rounded-full shadow-[0_0_15px_rgba(39,40,56,0.6)] transition-all duration-500 group-hover:scale-150 group-hover:border-electric-purple/50 group-hover:shadow-[0_0_25px_rgba(112,100,233,0.7)]"></span>
               </span>

               {/* Decorative Boxes - Right */}
               <span className="absolute right-4 md:right-50 top-1/3 border-cosmic-purple/40 border-2 w-28 h-44 md:w-36 md:h-60 rounded-3xl shadow-[0_0_120px_8px_rgba(122,53,201,0.3)] -skew-y-8 hidden sm:block group transition-all duration-500 hover:scale-110 hover:border-cosmic-purple/70 hover:shadow-[0_0_160px_12px_rgba(122,53,201,0.5)] hover:skew-y-6 cursor-pointer">
                    {/* Geometric shapes inside */}
                    <span className="absolute top-10 right-8 w-12 h-12 border-2 border-cosmic-purple/70 rotate-12 shadow-[0_0_15px_rgba(122,53,201,0.6)] transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:border-cosmic-purple group-hover:shadow-[0_0_25px_rgba(122,53,201,0.9)]"></span>
                    <span className="absolute bottom-10 left-8 w-9 h-9 bg-electric-purple/40 rounded-full shadow-[0_0_20px_rgba(112,100,233,0.7)] transition-all duration-500 group-hover:scale-125 group-hover:bg-electric-purple/60 group-hover:shadow-[0_0_30px_rgba(112,100,233,1)]"></span>
                    <span className="absolute top-1/3 left-1/3 w-7 h-7 border-2 border-shadow/70 shadow-[0_0_15px_rgba(39,40,56,0.6)] transition-all duration-500 group-hover:scale-150 group-hover:border-cosmic-purple/50 group-hover:shadow-[0_0_25px_rgba(122,53,201,0.7)] group-hover:rounded-lg"></span>
               </span>

               <div className="w-full max-w-md relative z-10">
                    <AnimatedBorder borderSize="600">
                         <div className="bg-midnight/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl w-full">
                              {/* Header */}
                              <div className="text-center mb-8">
                                   <h1 className="text-3xl font-bold bg-gradient-to-r from-electric-purple via-cosmic-purple to-electric-purple bg-clip-text text-transparent mb-2">
                                        Create Account
                                   </h1>
                                   <p className="text-slate text-sm">
                                        Join us and start your journey
                                   </p>
                              </div>

                              {/* Form */}
                              <form onSubmit={handleSubmit} className="space-y-4 relative">
                                   <Input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeHolder="Please Enter Your Name"
                                   >
                                        <SvgName className="w-5 h-5 stroke-slate/50 group-focus-within:stroke-electric-purple transition-colors duration-300" />
                                   </Input>

                                   <Input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeHolder="Please Enter Your Email"
                                   >
                                        <SvgEmail className="w-5 h-5 fill-slate/50 group-focus-within:fill-electric-purple transition-colors duration-300" />
                                   </Input>

                                   <Input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeHolder="Please Enter Your Password"
                                   >
                                        <SvgLock className="w-5 h-5 stroke-slate/50 group-focus-within:stroke-electric-purple transition-colors duration-300" />
                                   </Input>

                                   <Input
                                        type="password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeHolder="Please Confirm Your Password"
                                   >
                                        <SvgLock className="w-5 h-5 stroke-slate/50 group-focus-within:stroke-electric-purple transition-colors duration-300" />
                                   </Input>

                                   <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-electric-purple via-cosmic-purple to-electric-purple hover:brightness-115 transition-all duration-300 hover:scale-102 active:scale-[0.98]"
                                   >
                                        Sign Up
                                   </button>

                                   <p className="text-center text-slate text-sm">
                                        Already have an account?{" "}
                                        <button
                                             type="button"
                                             onClick={() => navigate("/login")}
                                             className="text-electric-purple hover:text-cosmic-purple transition-colors duration-200 font-medium"
                                        >
                                             Login
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

export default Register;
