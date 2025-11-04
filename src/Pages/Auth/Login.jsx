import AnimatedBorder from "../../Components/AnimatedBorder";
import boxed_logo from "../../assets/Images/Auth/boxed-logo.png";
import SvgGoogle from "../../assets/Icons/LoginPage/SvgGoogle";
import SvgFacebook from "../../assets/Icons/LoginPage/SvgFacebook";
import SvgEmail from "../../assets/Icons/LoginPage/SvgEmail";
import SvgLock from "../../assets/Icons/LoginPage/SvgLock";
import Underline from "../../Components/Underline";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { getCaptcha, loginUser } from "../../Apis/Auth/AuthServise";
import { useMutation, useQuery } from "@tanstack/react-query";
// import { useState } from "react";

const Login = () => {
     const navigate = useNavigate();

     // const loginMutation = useMutation({
     //      mutationFn: loginUser,
     //      onSuccess: (data) => {
     //           alert("login was succes full");
     //           navigate("/admin");
     //      },
     //      onError: (error) => {
     //           alert("error : " + error.response?.data?.message || " we have aproblem");
     //      },
     //      onSettled: () => {
     //           console.log("login was fully complited");
     //      },
     // });

     // const [UserName, setUserName] = useState("");
     // const [Password, setPassword] = useState("");

     // const handleSubmit = (e) => {
     //      e.preventDefault();
     //      loginMutation.mutate({ UserName, Password });
     // };

     const {
          data: captchaData, // داده‌های برگشتی (شامل ID و Image)
          isLoading: isCaptchaLoading, // آیا هنوز لود نشده؟
          isError: isCaptchaError, // آیا خطایی پیش آمده؟
          refetch: refreshCaptcha, // تابعی برای درخواست مجدد کپچا
     } = useQuery({
          queryKey: ["captcha"], // ۱. یک کلید منحصربه‌فرد برای این داده
          queryFn: getCaptcha, // ۲. تابعی که داده را می‌آورد
     });


     return (
          <section className=" w-full min-h-screen bg-dark text-white flex justify-center items-center">
               <AnimatedBorder borderSize="1000">
                    <div className="bg-authCard inherit-rounded overflow-hidden flex flex-col">
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
                                   <div className="w-full h-[1px] animate-line bg-[linear-gradient(to_right,transparent_49%,#695cfa_50%,#695cfa_50%,transparent_51%)] bg-[200%,100%] "></div>
                              </div>
                         </div>
                         <div className="flex flex-col space-y-7 bg-authCard px-7">
                              <div className="bg-authCard">
                                   <div
                                        id="text"
                                        className="flex justify-center items-center font-bold text-2xl text-[#CCCEEF] pt-7 pb-5"
                                   >
                                        <h1>Welcome Back</h1>
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
                              <div className=" bg-authCard flex flex-col justify-center items-center relative">
                                   <div className="w-full h-[1px] bg-main/30 absolute"></div>
                                   <p className="absolute bg-authCard px-2 text-melogray">
                                        Or continue with
                                   </p>
                              </div>
                              <form className="flex flex-col gap-4 pb-7">
                                   <Input
                                        // onChange={(e) => setUserName(e.target.value)}
                                        type="email"
                                        placeHolder="Please Enter Your Email"
                                   >
                                        <SvgEmail className="w-5 h-5 fill-melogray/50  transition-colors duration-400 group-focus-within:fill-main" />
                                   </Input>
                                   <Input
                                        // onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeHolder="Please Enter Your Password"
                                   >
                                        <SvgLock className="w-5 h-5 stroke-melogray/50 transition-colors duration-400 fill-transparent group-focus-within:stroke-main" />
                                   </Input>
                                   <div className="flex justify-end">
                                        <Underline>Forget Password?</Underline>
                                   </div>
                                   <div>
                                        {isCaptchaError && <div>Error chaptcha</div>}
                                        {isCaptchaLoading && <div>Loading captcha</div>}
                                        <div>{captchaData}</div>
                                        <button type="button" onClick={refreshCaptcha}>
                                             refresh
                                        </button>
                                   </div>
                                   <button className="w-full transition-brightness duration-300 bg-[linear-gradient(to_right,#9737F1)] hover:brightness-120 text-sm py-4 rounded-[8px] font-semibold cursor-pointer active:scale-98">
                                        Sign in
                                   </button>
                                   <div className="flex gap-2 text-gray-500">
                                        Don't have an account?
                                        <Underline color="#afb0b3">
                                             <a onClick={() => navigate("/register")}>Sign Up</a>
                                        </Underline>
                                   </div>
                              </form>
                         </div>
                    </div>
               </AnimatedBorder>
          </section>
     );
};

export default Login;
