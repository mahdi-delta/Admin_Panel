import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import HomePage from "./Pages/Home/HomePage";

const App = () => {
     return (
          <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/admin" element={<AdminPanel />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
          </Routes>
     );
};

export default App;
