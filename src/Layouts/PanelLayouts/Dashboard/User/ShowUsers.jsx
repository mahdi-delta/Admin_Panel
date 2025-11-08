import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Arrow from "../../../../assets/Icons/Public/Arrow";
import SvgSearch from "../../../../assets/Icons/AdminPage/Header/SvgSearch";
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
     const [searchQuery, setSearchQuery] = useState("");

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

     //user profile
     const handleProfile = (id) => {
          setSelectedUserId(id);
          setProfileActive((prev) => (prev === id ? -1 : id));
     };

     //use modal to edit user
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

     //use modal to delete user
     const handleDeleteUser = () => {
          if (!User) return;
          setIsDeleteModalOpen(true);
     };

     //use modal to remove user
     const confirmDelete = () => {
          if (!User) return;
          deleteUserMutation.mutate(User.id);
     };

     // Filter users based on search query
     const filteredUsers = Users?.filter((user) => { // filtered Users
          const fullName = `${user.firstname} ${user.lastname}`.toLowerCase(); // combine first name + space + last name and convert to lower case
          return fullName.includes(searchQuery.toLowerCase()); // check if full name includes search query
     });

     if (UsersLoading) return <p className="text-center">Loading users...</p>;
     if (UsersError) return <p className="text-center">Error loading users</p>;

     return (
          <section className="w-full flex flex-col text-left text-slate gap-3">
               {/* Search Bar */}
               <div className="bg-midnight p-4 rounded-xl">
                    <div className="flex items-center relative max-w-md">
                         <SvgSearch className="w-5 h-5 stroke-2 stroke-cosmic-purple absolute left-3 pointer-events-none" />
                         <input
                              type="text"
                              placeholder="Search by name..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full text-white/80 placeholder:text-slate/70 bg-shadow/50 border-1 border-slate/30 rounded-xl py-3 pr-4 pl-10 outline-none focus:border-electric-purple/50 transition-colors duration-200"
                         />
                         {searchQuery && (
                              <button
                                   onClick={() => setSearchQuery("")}
                                   className="absolute right-3 text-slate hover:text-white transition-colors"
                              >
                                   ✕
                              </button>
                         )}
                    </div>
                    {searchQuery && (
                         <p className="text-slate text-sm mt-2">
                              Found {filteredUsers?.length || 0} user
                              {filteredUsers?.length !== 1 ? "s" : ""}
                         </p>
                    )}
               </div>

               <div className="w-full flex max-mid:flex-col gap-3">
                    <div
                         className={`w-full max-mid:w-full max-h-[calc(100vh-190px)] overflow-auto ${
                              SelectedUserId && "max-mid:hidden"
                         }`}
                    >
                         {/* Desktop/Tablet Table View */}
                         <div className="max-sm:hidden rounded-xl">
                              <table className="bg-midnight w-full border-collapse rounded-xl">
                                   <thead className="text-white/80">
                                        <tr>
                                             <th className="p-2 pl-16 border-b border-shadow">
                                                  ID
                                             </th>
                                             <th className="p-2 border-b border-shadow">
                                                  First Name
                                             </th>
                                             <th className="p-2 border-b border-shadow">
                                                  Last Name
                                             </th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {filteredUsers?.length > 0 ? (
                                             filteredUsers.map((user) => (
                                                  <tr
                                                       key={user.id}
                                                       onClick={() => handleProfile(user.id)}
                                                       className="p-3 hover:bg-white/5 cursor-pointer relative"
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
                                             ))
                                        ) : (
                                             <tr>
                                                  <td
                                                       colSpan="4"
                                                       className="p-8 text-center text-slate"
                                                  >
                                                       No users found matching "{searchQuery}"
                                                  </td>
                                             </tr>
                                        )}
                                   </tbody>
                              </table>
                         </div>

                         {/* Mobile Card View */}
                         <div className="hidden max-sm:flex max-sm:flex-col max-sm:gap-2">
                              {filteredUsers?.length > 0 ? (
                                   filteredUsers.map((user) => (
                                        <div
                                             key={user.id}
                                             onClick={() => handleProfile(user.id)}
                                             className="bg-midnight p-4 rounded-xl cursor-pointer hover:bg-white/5 relative"
                                        >
                                             <span
                                                  className={`absolute left-2 top-2 w-2 h-2 rounded-full ${
                                                       user.online
                                                            ? "bg-matrix-green"
                                                            : "bg-red-500"
                                                  }`}
                                             ></span>
                                             <div className="flex justify-between items-center">
                                                  <div>
                                                       <p className="text-white/80 font-semibold">
                                                            {user.firstname} {user.lastname}
                                                       </p>
                                                       <p className="text-slate text-sm">
                                                            ID: {user.id}
                                                       </p>
                                                  </div>
                                                  <Arrow className="w-4 fill-slate rotate-90" />
                                             </div>
                                        </div>
                                   ))
                              ) : (
                                   <div className="bg-midnight p-8 rounded-xl text-center text-slate">
                                        No users found matching "{searchQuery}"
                                   </div>
                              )}
                         </div>
                    </div>
                    <div
                         className={`max-mid:w-full min-mid:w-1/2 rounded-xl flex justify-start flex-col gap-3 max-h-[calc(100vh-190px)] overflow-auto ${
                              SelectedUserId && "max-mid:flex max-mid:w-full"
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
