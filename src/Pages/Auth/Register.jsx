import { useState } from "react";
import SvgEmail from "../../assets/Icons/LoginPage/SvgEmail";
import SvgLock from "../../assets/Icons/LoginPage/SvgLock";
import SvgName from "../../assets/Icons/LoginPage/SvgName";
import Input from "../../Components/Input";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

               <div className="w-full max-w-md relative z-10">
                    {/* Glass card */}
                    <div className="bg-midnight/70 backdrop-blur-xl border-2 border-electric-purple/20 rounded-3xl p-8 shadow-2xl">
                         {/* Header */}
                         <div className="text-center mb-8">
                              <h1 className="text-3xl font-bold bg-gradient-to-r from-electric-purple via-cosmic-purple to-electric-purple bg-clip-text text-transparent mb-2">
                                   Create Account
                              </h1>
                              <p className="text-slate text-sm">Join us and start your journey</p>
                         </div>

                         {/* Form */}
                         <form onSubmit={handleSubmit} className="space-y-4">
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
                                   className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-electric-purple via-cosmic-purple to-electric-purple hover:shadow-lg hover:shadow-cosmic-purple/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
