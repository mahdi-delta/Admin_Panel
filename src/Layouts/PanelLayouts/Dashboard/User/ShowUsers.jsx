import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Arrow from "../../../../assets/Icons/Public/Arrow";
import {
     fetchUsers,
     fetchUserById,
     updateUser,
     deleteUser,
} from "../../../../Apis/User/UserServise";
import UserProfile from "./UserProfile";
import AddUser from "./AddUser";
import EditUserModal from "../../../../Components/EditUserModal";
import DeleteConfirmModal from "../../../../Components/DeleteConfirmModal";

const ShowUsers = () => {
     const queryClient = useQueryClient();

     const [ProfileActive, setProfileActive] = useState(-1);
     const [SelectedUserId, setSelectedUserId] = useState(null);
     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
     const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
          mutationFn: ({ userId, updatedData }) => updateUser(userId, updatedData),
          onSuccess: () => {
               queryClient.invalidateQueries(["users"]);
               queryClient.invalidateQueries(["user"]);
               setIsEditModalOpen(false);
               toast.success("User updated successfully ✅");
          },
          onError: () => toast.error("Failed to update user ❌"),
     });

     const deleteUserMutation = useMutation({
          mutationFn: deleteUser,
          onSuccess: () => {
               queryClient.invalidateQueries(["users"]);
               setProfileActive(-1);
               setSelectedUserId(null);
               setIsDeleteModalOpen(false);
               toast.success("User deleted successfully 🗑️");
          },
          onError: () => toast.error("Failed to delete user ❌"),
     });

     const handleProfile = (id) => {
          setSelectedUserId(id);
          setProfileActive((prev) => (prev === id ? -1 : id));
     };

     const handleEditUser = () => {
          if (!User) return;
          setIsEditModalOpen(true);
     };

     const handleSaveEdit = (updatedData) => {
          if (!User) return;
          updateUserMutation.mutate({
               userId: User.id,
               updatedData: { ...User, ...updatedData },
          });
     };

     const handleDeleteUser = () => {
          if (!User) return;
          setIsDeleteModalOpen(true);
     };

     const confirmDelete = () => {
          if (!User) return;
          deleteUserMutation.mutate(User.id);
     };

     if (UsersLoading) return <p className="text-center">Loading users...</p>;
     if (UsersError) return <p className="text-center">Error loading users</p>;

     return (
          <section className="w-full flex flex-col text-left text-slate">
               <div className="w-full flex gap-3">
                    <div className="w-full max-h-[calc(100vh-235px)] overflow-scroll">
                         <table
                              className={`bg-midnight w-full border-collapse rounded-xl ${
                                   SelectedUserId && "max-mid:hidden"
                              }`}
                         >
                              <thead className="text-white/80">
                                   <tr>
                                        <th className="p-2 pl-16 border-b border-shadow">ID</th>
                                        <th className="p-2 border-b border-shadow">First Name</th>
                                        <th className="p-2 border-b border-shadow">Last Name</th>
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
                                             <td className="p-2 pl-16 border-b border-shadow">
                                                  {user.id}
                                             </td>
                                             <td className="p-2 border-b border-shadow">
                                                  {user.firstname}
                                             </td>
                                             <td className="p-2 border-b border-shadow">
                                                  {user.lastname}
                                             </td>
                                             <td className="border-b border-shadow">
                                                  <Arrow className="w-5 fill-slate rotate-90" />
                                             </td>
                                             <td>
                                                  <span
                                                       className={`absolute left-8 top-5 w-2 h-2 rounded-full ${
                                                            user.online
                                                                 ? "bg-matrix-green"
                                                                 : "bg-red-500"
                                                       }`}
                                                  ></span>
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>
                    <div
                         className={`w-1/2 flex justify-start flex-col gap-3  max-h-[calc(100vh-235px)] overflow-scroll mr-2 ${
                              SelectedUserId && "max-mid:flex-row max-mid:w-full"
                         }`}
                    >
                         <div
                              className={`w-full bg-midnight h-max text-slate ease-in-out rounded-xl shadow-2xl relative ${
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

               {/* Edit User Modal */}
               <EditUserModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    user={User}
                    onSave={handleSaveEdit}
               />

               {/* Delete Confirm Modal */}
               <DeleteConfirmModal
                    isOpen={isDeleteModalOpen}
                    onClose={() => setIsDeleteModalOpen(false)}
                    userName={User ? `${User.firstname} ${User.lastname}` : ""}
                    onConfirm={confirmDelete}
                    isDeleting={deleteUserMutation.isPending}
               />
          </section>
     );
};

export default ShowUsers;
