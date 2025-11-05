const Modal = ({ isOpen, onClose, title, children }) => {
     if (!isOpen) return null;

     return (
          <div
               className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
               onClick={onClose}
          >
               <div
                    className="bg-midnight border border-shadow rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-in fade-in zoom-in duration-200"
                    onClick={(e) => e.stopPropagation()}
               >
                    <div className="bg-gradient-to-r from-electric-purple/20 to-cosmic-purple/20 px-6 py-4 border-b border-shadow">
                         <div className="flex items-center justify-between">
                              <h2 className="text-xl font-semibold text-white/90">{title}</h2>
                              <button
                                   onClick={onClose}
                                   className="text-slate hover:text-white text-2xl transition-colors"
                              >
                                   ×
                              </button>
                         </div>
                    </div>
                    <div className="p-6">{children}</div>
               </div>
          </div>
     );
};

export default Modal;

