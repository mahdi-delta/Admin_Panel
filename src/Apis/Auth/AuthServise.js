const API_URL = "localhost:4000/api/v1/auth";

// get Captcha from Api
export const getCaptcha = async () => {
     const res = await fetch(`http://localhost:4000/api/v1/auth/captcha`);
     if (!res.ok) throw new Error("Failed to get captcha");
     return res.json();
};

// Register
export const registerUser = async (userData) => {
     const res = await fetch(`${API_URL}/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
     });

     if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to register user");
     }
     return res.json();
};

// Login
export const loginUser = async (loginData) => {
     const res = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
     });

     if (!res.ok) throw new Error("Invalid credentials");
     return res.json();
};

// Forget password
export const forgetPassword = async (emailData) => {
     const res = await fetch(`${API_URL}/forget-password`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailData),
     });
     if (!res.ok) throw new Error("Failed to send reset link");
     return res.json();
};
