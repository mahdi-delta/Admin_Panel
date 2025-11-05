import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import HomePage from "./Pages/Home/HomePage";

const App = () => {
     return (
          <>
               <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{
                         duration: 3000,
                         style: {
                              background: "#0f1021",
                              color: "#fff",
                              border: "1px solid #272838",
                              borderRadius: "12px",
                              padding: "16px",
                              fontWeight: "500",
                         },
                         success: {
                              style: {
                                   border: "1px solid #43DC80",
                              },
                              iconTheme: {
                                   primary: "#43DC80",
                                   secondary: "#0f1021",
                              },
                         },
                         error: {
                              style: {
                                   border: "1px solid #ef4444",
                              },
                              iconTheme: {
                                   primary: "#ef4444",
                                   secondary: "#0f1021",
                              },
                         },
                         loading: {
                              style: {
                                   border: "1px solid #7064E9",
                              },
                              iconTheme: {
                                   primary: "#7064E9",
                                   secondary: "#0f1021",
                              },
                         },
                    }}
               />
               <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
               </Routes>
          </>
     );
};

export default App;

