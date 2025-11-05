import { useParams, useNavigate } from "react-router-dom";
import { deleteUser, fetchUserById } from "../../../Apis/User/UserServise";
import { useEffect, useState } from "react";

const DeleteUser = () => {
     const { id } = useParams();
     const navigate = useNavigate();
     const [user, setUser] = useState(null);

     useEffect(() => {
          const loadUser = async () => {
               try {
                    const data = await fetchUserById(id);
                    setUser(data);
               } catch (error) {
                    alert("User not found.", error);
                    navigate("/users");
               }
          };
          loadUser();
     }, [id]);

     const handleDelete = async () => {
          try {
               await deleteUser(id);
               alert("User deleted successfully 🗑️");
               navigate("/users");
          } catch (error) {
               alert("Failed to delete user ❌", error);
          }
     };

     if (!user) return <p className="text-center mt-10">Loading...</p>;

     return (
          <div className="max-w-md mx-auto mt-20 bg-midnight p-8 rounded-xl text-center shadow-lg">
               <h2 className="text-2xl text-red-400 font-semibold mb-4">Delete User</h2>
               <p className="text-gray-300 mb-6">
                    Are you sure you want to delete{" "}
                    <strong>
                         {user.firstname} {user.lastname}
                    </strong>
                    ?
               </p>
               <div className="flex justify-center gap-4">
                    <button
                         onClick={handleDelete}
                         className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
                    >
                         Yes, Delete
                    </button>
                    <button
                         onClick={() => navigate("/users")}
                         className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
                    >
                         Cancel
                    </button>
               </div>
          </div>
     );
};

export default DeleteUser;

