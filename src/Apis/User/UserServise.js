const API_URL = "https://6874bafcdd06792b9c94f7d1.mockapi.io/mahdi/api/users";

// Get all user data
export const fetchUsers = async () => {
     const response = await fetch(API_URL);
     if (!response.ok) throw new Error("Failed to fetch users");
     return await response.json();
};

// Get one user data
export const fetchUserById = async (userId) => {
     const response = await fetch(`${API_URL}/${userId}`);
     if (!response.ok) throw new Error("Failed to fetch user data");
     return await response.json();
};

// Edit user data
export const updateUser = async (userId, updatedData) => {
     const response = await fetch(`${API_URL}/${userId}`, {
          method: "PUT",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
     });

     if (!response.ok) throw new Error("Failed to update user data");
     return await response.json();
};

// Delete user data
export const deleteUser = async (userId) => {
     const response = await fetch(`${API_URL}/${userId}`, {
          method: "DELETE",
     });

     if (!response.ok) throw new Error("Failed to delete user");
     return await response.json();
};

// export const addUser = async (data) => {
//      const res = await fetch(`${API_URL}/users`, {
//           method: "POST",
//           headers: {'content-Type' : 'application/json'},
//                body: JSON.stringify(data),
//      });

//      if (!res.ok) {
//           const errorData = await res.json().catch(() => ({}));
//           throw new Error(errorData.message || "Failed to add user");
//      }

//      return res.json();
// };

export const addUser = async (data) => {
     const response = await fetch(`${API_URL}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
     });

     if (!response.ok) throw new Error("Failed to add user");

     return response.json();
};

