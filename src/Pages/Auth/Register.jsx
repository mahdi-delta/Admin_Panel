import { useQuery, useMutation } from "@tanstack/react-query";
import { getCaptcha, registerUser } from "../../Apis/Auth/AuthServise";
import { useState } from "react";
import AnimatedBorder from "../../Components/AnimatedBorder";
import boxed_logo from "../../assets/Images/Auth/boxed-logo.png";
import SvgGoogle from "../../assets/Icons/LoginPage/SvgGoogle";
import SvgFacebook from "../../assets/Icons/LoginPage/SvgFacebook";
import SvgEmail from "../../assets/Icons/LoginPage/SvgEmail";
import SvgLock from "../../assets/Icons/LoginPage/SvgLock";
import SvgName from "../../assets/Icons/LoginPage/SvgName";
import Underline from "../../Components/Underline";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
     const navigate = useNavigate();
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          captchaValue: "",
     });

     // ✅ Fetch captcha from API
     const {
          data: captchaData,
          refetch: refreshCaptcha,
          isFetching: captchaLoading,
     } = useQuery({
          queryKey: ["captcha"],
          queryFn: getCaptcha,
          staleTime: 0,
     });

     const captchaSvg = captchaData?.captcha || null;
     const captchaId = captchaData?.captchaId || null;

     // ✅ Handle form input
     const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     // ✅ Register mutation
     const registerMutation = useMutation({
          mutationFn: (userData) => registerUser(userData),
          onSuccess: () => {
               navigate("/login");
          },
     });

     // ✅ Handle submit
     const handleSubmit = (e) => {
          e.preventDefault();
          if (formData.password !== formData.confirmPassword) {
               alert("Passwords do not match!");
               return;
          }

          registerMutation.mutate({
               name: formData.name,
               email: formData.email,
               password: formData.password,
               captchaId,
               captchaValue: formData.captchaValue,
          });
     };

     return (
          <section className="w-full min-h-screen bg-dark text-white flex justify-center items-center">
               <AnimatedBorder borderSize="1000">
                    <div className="bg-authCard inherit-rounded overflow-hidden flex flex-col">
                         {/* Top Logo Section */}
                         <div className="w-full">
                              <div
                                   style={{
                                        backgroundSize: "contain",
                                        backgroundPosition: "center",
                                        backgroundImage: `URL(${boxed_logo})`,
                                   }}
                                   className="w-full h-35 relative
                                        before:absolute before:content-[''] before:w-full before:h-full before:left-0 before:top-0
                                        before:bg-[linear-gradient(to_bottom,#7064E933,transparent)] before:z-20"
                              ></div>
                              <div className="w-full h-[1px] bg-[linear-gradient(to_right,#101122_10%,#7064E911_50%,#101122_90%)] overflow-y-visible">
                                   <div className="w-full h-[1px] animate-line bg-[linear-gradient(to_right,transparent_49%,#695cfa_50%,#695cfa_50%,transparent_51%)] bg-[200%,100%]" />
                              </div>
                         </div>

                         {/* Main Form Section */}
                         <div className="flex flex-col space-y-7 bg-authCard px-7">
                              <div className="bg-authCard">
                                   <div
                                        id="text"
                                        className="flex justify-center items-center font-bold text-2xl text-[#CCCEEF] pt-7 pb-5"
                                   >
                                        <h1>Create Account</h1>
                                   </div>
                                   <div
                                        id="login-with-other-way"
                                        className="flex justify-center items-center space-x-3"
                                   >
                                        <Button
                                             text="Login with Google"
                                             onClick={() => navigate("/")}
                                        >
                                             <SvgGoogle className="w-5 h-5" />
                                        </Button>
                                        <Button
                                             text="Login with Facebook"
                                             onClick={() => navigate("/")}
                                        >
                                             <SvgFacebook className="w-5 h-5" />
                                        </Button>
                                   </div>
                              </div>

                              {/* Divider */}
                              <div className=" bg-authCard flex flex-col justify-center items-center relative">
                                   <div className="w-full h-[1px] bg-main/30 absolute"></div>
                                   <p className="absolute bg-authCard px-2 text-melogray">
                                        Or continue with
                                   </p>
                              </div>

                              {/* Form */}
                              <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-7">
                                   <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeHolder="Please Enter Your Name"
                                   >
                                        <SvgName className="w-5 h-5 stroke-melogray/50 group-focus-within:stroke-main" />
                                   </Input>

                                   <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeHolder="Please Enter Your Email"
                                   >
                                        <SvgEmail className="w-5 h-5 fill-melogray/50 group-focus-within:fill-main" />
                                   </Input>

                                   <Input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeHolder="Please Enter Your Password"
                                   >
                                        <SvgLock className="w-5 h-5 stroke-melogray/50 group-focus-within:stroke-main" />
                                   </Input>

                                   <Input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeHolder="Please Confirm Your Password"
                                   >
                                        <SvgLock className="w-5 h-5 stroke-melogray/50 group-focus-within:stroke-main" />
                                   </Input>

                                   <div>
                                        {() => (alert(captchaData))}
                                   </div>
                                   {/* ✅ CAPTCHA Section */}
                                   <div className="flex items-center justify-between gap-3 mt-2">
                                        {captchaLoading ? (
                                             <p>Loading...</p>
                                        ) : (
                                             <img
                                                  src={captchaSvg}
                                                  alt="captcha"
                                                  className="w-40 h-16 rounded border border-gray-600"
                                             />
                                        )}
                                        <button
                                             type="button"
                                             onClick={() => refreshCaptcha()}
                                             className="text-sm text-blue-400 hover:text-blue-300"
                                        >
                                             Refresh 🔄
                                        </button>
                                   </div>

                                   <Input
                                        type="text"
                                        name="captchaValue"
                                        value={formData.captchaValue}
                                        onChange={handleChange}
                                        placeHolder="Enter Captcha Text"
                                   />

                                   <button
                                        type="submit"
                                        disabled={registerMutation.isLoading}
                                        className="w-full transition-brightness duration-300 bg-[linear-gradient(to_right,#9737F1)] hover:brightness-120 text-sm py-4 rounded-[8px] font-semibold cursor-pointer active:scale-98"
                                   >
                                        {registerMutation.isLoading ? "Signing up..." : "Sign up"}
                                   </button>

                                   <div className="flex gap-2 text-gray-500">
                                        Already have an account?
                                        <Underline color="#afb0b3">
                                             <a onClick={() => navigate("/login")}>Login</a>
                                        </Underline>
                                   </div>
                              </form>
                         </div>
                    </div>
               </AnimatedBorder>
          </section>
     );
};

export default Register;
