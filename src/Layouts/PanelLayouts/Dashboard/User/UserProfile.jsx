import InfoRow from "../../../../Components/InfoRow";

const UserProfile = ({
     User,
     UserisLoading,
     setProfileActive,
     handleDeleteUser,
     handleEditUser,
     setSelectedUserId,
}) => {
     return (
          <>
               {UserisLoading ? (
                    <div className="flex flex-col items-center justify-center h-full">
                         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-400 mb-3"></div>
                         <p className="text-gray-400">Loading Profile...</p>
                    </div>
               ) : User && typeof User === "object" ? (
                    <div className="space-y-6">
                         <div className="flex flex-col items-start text-center gap-3">
                              <img
                                   src={User.avatar || "placeholder-url"}
                                   alt={`${User.firstname} Avatar`}
                                   className="w-24 h-24 rounded-full object-cover border-0 border-indigo-500 shadow-xl mb-3"
                              />

                              <h3 className="text-2xl font-bold text-white/80">
                                   {User.firstname} {User.lastname}
                              </h3>

                              <p className="text-xs text-gray-500 mt-1">
                                   ID: {User.id} | Created:{" "}
                                   {new Date(User.createdAt).toLocaleDateString("en-US")}
                              </p>

                              <div className="mt-2">
                                   <span
                                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                                             User.online == 1
                                                  ? "bg-green-600 text-white/80"
                                                  : "bg-red-600 text-white/80"
                                        }`}
                                   >
                                        {User.online == 1 ? "ONLINE" : "OFFLINE"}
                                   </span>
                              </div>
                         </div>

                         <div className="space-y-3">
                              <h4 className="text-lg font-semibold text-indigo-400 pb-1 mb-3">
                                   Contact & Location
                              </h4>

                              <InfoRow icon="📧" label="Email" value={User.email} />

                              <InfoRow icon="📞" label="Phone" value={User.phone} />

                              <InfoRow icon="🏙️" label="City" value={User.city} />

                              <InfoRow icon="📍" label="Address" value={User.address} />
                         </div>

                         <div>
                              <button
                                   onClick={() =>[ setProfileActive(-1), setSelectedUserId(null)]}
                                   className="absolute top-3 right-5 text-2xl text-red-400 hover:text-indigo-400 transition duration-200"
                              >
                                   ×
                              </button>
                         </div>
                         <div className="flex gap-6">
                              <button
                                   onClick={handleEditUser}
                                   className="px-6 py-2 border-1 rounded-xl hover:bg-blue hover:text-white transition-font duration-200 border-blue text-blue"
                              >
                                   Edit
                              </button>
                              <button
                                   onClick={handleDeleteUser}
                                   className="px-6 py-2 border-1 rounded-xl hover:bg-red-400 hover:text-white transition-font duration-200 border-red-400 text-red-400"
                              >
                                   remove
                              </button>
                         </div>
                    </div>
               ) : (
                    <div className="flex items-center justify-center h-full text-center p-4 text-gray-500">
                         <p>👈 Please select a user from the list.</p>
                    </div>
               )}
          </>
     );
};

export default UserProfile;
