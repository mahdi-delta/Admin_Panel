import Modal from "./Modal";

const DeleteConfirmModal = ({ isOpen, onClose, userName, onConfirm, isDeleting }) => {
     return (
          <Modal isOpen={isOpen} onClose={onClose} title="Confirm Delete">
               <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                         <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                              <svg
                                   className="w-6 h-6 text-red-500"
                                   fill="none"
                                   stroke="currentColor"
                                   viewBox="0 0 24 24"
                              >
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                   />
                              </svg>
                         </div>
                         <div className="flex-1">
                              <p className="text-white/90 text-lg">
                                   Are you sure you want to delete{" "}
                                   <span className="font-semibold text-red-400">{userName}</span>?
                              </p>
                              <p className="text-slate text-sm mt-1">
                                   This action cannot be undone.
                              </p>
                         </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                         <button
                              type="button"
                              onClick={onClose}
                              disabled={isDeleting}
                              className="px-6 py-2 border border-shadow rounded-xl text-slate hover:bg-shadow hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                         >
                              Cancel
                         </button>
                         <button
                              type="button"
                              onClick={onConfirm}
                              disabled={isDeleting}
                              className="px-6 py-2 bg-red-500 rounded-xl text-white hover:bg-red-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                         >
                              {isDeleting ? "Deleting..." : "Delete User"}
                         </button>
                    </div>
               </div>
          </Modal>
     );
};

export default DeleteConfirmModal;

