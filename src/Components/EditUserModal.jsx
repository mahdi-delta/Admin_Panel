import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";

const EditUserModal = ({ isOpen, onClose, user, onSave }) => {
     const [formData, setFormData] = useState({
          firstname: user?.firstname || "",
          lastname: user?.lastname || "",
          email: user?.email || "",
          phone: user?.phone || "",
          city: user?.city || "",
          address: user?.address || "",
     });

     const handleSubmit = (e) => {
          e.preventDefault();
          onSave(formData);
     };

     return (
          <Modal isOpen={isOpen} onClose={onClose} title="Edit User">
               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                         type="text"
                         placeHolder="First Name"
                         value={formData.firstname}
                         onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                         required
                    />
                    <Input
                         type="text"
                         placeHolder="Last Name"
                         value={formData.lastname}
                         onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                         required
                    />
                    <Input
                         type="email"
                         placeHolder="Email"
                         value={formData.email}
                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                         required
                    />
                    <Input
                         type="tel"
                         placeHolder="Phone"
                         value={formData.phone}
                         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <Input
                         type="text"
                         placeHolder="City"
                         value={formData.city}
                         onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                    <Input
                         type="text"
                         placeHolder="Address"
                         value={formData.address}
                         onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />

                    <div className="flex gap-3 justify-end mt-2">
                         <button
                              type="button"
                              onClick={onClose}
                              className="px-6 py-2 border border-shadow rounded-xl text-slate hover:bg-shadow hover:text-white transition-colors duration-200"
                         >
                              Cancel
                         </button>
                         <button
                              type="submit"
                              className="px-6 py-2 bg-gradient-to-r from-electric-purple to-cosmic-purple rounded-xl text-white hover:opacity-90 transition-opacity duration-200"
                         >
                              Save Changes
                         </button>
                    </div>
               </form>
          </Modal>
     );
};

export default EditUserModal;

