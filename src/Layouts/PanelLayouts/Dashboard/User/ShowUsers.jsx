import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Arrow from "../../../../assets/Icons/Public/Arrow";
import {
     fetchUsers,
     fetchUserById,
     updateUser,
     deleteUser,
} from "../../../../Apis/User/UserServise";
import UserProfile from "./UserProfile";
import AddUser from "./AddUser";

const ShowUsers = () => {
     const queryClient = useQueryClient();

     const [ProfileActive, setProfileActive] = useState(-1);
     const [SelectedUserId, setSelectedUserId] = useState(null);

     const {
          data: Users,
          isLoading: UsersLoading,
          error: UsersError,
     } = useQuery({
          queryKey: ["users"],
          queryFn: fetchUsers,
     });

     const { data: User, isLoading: UserLoading } = useQuery({
          queryKey: ["user", SelectedUserId],
          queryFn: () => fetchUserById(SelectedUserId),
          enabled: !!SelectedUserId,
     });

     const updateUserMutation = useMutation({
          mutationFn: updateUser,
          onSuccess: () => {
               queryClient.invalidateQueries(["users"]);
               queryClient.invalidateQueries(["user"]);
               alert("User updated successfully ✅");
          },
          onError: () => alert("Failed to update user ❌"),
     });

     const deleteUserMutation = useMutation({
          mutationFn: deleteUser,
          onSuccess: () => {
               queryClient.invalidateQueries(["users"]);
               setProfileActive(-1);
               setSelectedUserId(null);
               alert("User deleted successfully 🗑️");
          },
          onError: () => alert("Failed to delete user ❌"),
     });

     const handleProfile = (id) => {
          setSelectedUserId(id);
          setProfileActive((prev) => (prev === id ? -1 : id));
     };

     const handleEditUser = () => {
          if (!User) return;

          const updatedUser = {
               ...User,
               firstname: prompt("New first name:", User.firstname) || User.firstname,
               lastname: prompt("New last name:", User.lastname) || User.lastname,
               city: prompt("New city:", User.city) || User.city,
          };

          updateUserMutation.mutate({ userId: User.id, updatedData: updatedUser });
     };

     const handleDeleteUser = () => {
          if (!User) return;
          const confirmDelete = window.confirm(`Delete ${User.firstname}?`);
          if (confirmDelete) deleteUserMutation.mutate(User.id);
     };

     if (UsersLoading) return <p className="text-center">Loading users...</p>;
     if (UsersError) return <p className="text-center">Error loading users</p>;

     return (
          <section className="w-full flex flex-col text-left text-melogray">
               <div className="w-full flex gap-3">
                    <div className="w-full max-h-157 overflow-scroll">
                         <table
                              className={`bg-authCard w-full border-collapse rounded-xl ${
                                   SelectedUserId && "max-mid:hidden"
                              }`}
                         >
                              <thead className="text-white/80">
                                   <tr>
                                        <th className="p-2 pl-16 border-b border-fullgray">ID</th>
                                        <th className="p-2 border-b border-fullgray">First Name</th>
                                        <th className="p-2 border-b border-fullgray">Last Name</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {Users?.map((user) => (
                                        <tr
                                             key={user.id}
                                             onClick={() => handleProfile(user.id)}
                                             className={`p-3 hover:bg-white/5 cursor-pointer relative
                                             `}
                                        >
                                             <td className="p-2 pl-16 border-b border-fullgray">
                                                  {user.id}
                                             </td>
                                             <td className="p-2 border-b border-fullgray">
                                                  {user.firstname}
                                             </td>
                                             <td className="p-2 border-b border-fullgray">
                                                  {user.lastname}
                                             </td>
                                             <td className="border-b border-fullgray">
                                                  <Arrow className="w-5 fill-melogray rotate-90" />
                                             </td>
                                             <td>
                                                  <span
                                                       className={`absolute left-8 top-5 w-2 h-2 rounded-full ${
                                                            user.online ? "bg-green" : "bg-red-500"
                                                       }`}
                                                  ></span>
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>
                    <div
                         className={`w-1/2 flex justify-start flex-col gap-3  max-h-157 overflow-scroll mr-2 ${
                              SelectedUserId && "max-mid:flex-row max-mid:w-full"
                         }`}
                    >
                         <div
                              className={`w-full bg-authCard h-max text-melogray ease-in-out rounded-xl shadow-2xl relative ${
                                   ProfileActive !== -1 ? "p-6" : "hidden p-0"
                              }`}
                         >
                              <UserProfile
                                   User={User}
                                   ProfileActive={ProfileActive}
                                   UserisLoading={UserLoading}
                                   setProfileActive={setProfileActive}
                                   setSelectedUserId={setSelectedUserId}
                                   handleDeleteUser={handleDeleteUser}
                                   handleEditUser={handleEditUser}
                              />
                         </div>
                         <AddUser />
                    </div>
               </div>
          </section>
     );
};

export default ShowUsers;
