import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addUser } from "../../../../Apis/User/UserServise";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/NewWork";

const AddUser = () => {
     const queryClient = useQueryClient();

     const [formData, setFormData] = useState({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          city: "",
          address: "",
     });

     // ✅ Mutation for API call
     const mutation = useMutation({
          mutationFn: addUser,
          onSuccess: (data) => {
               toast.success("User added successfully! ✅");
               queryClient.invalidateQueries(["users"]);
               console.log("Response:", data);
               setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    city: "",
                    address: "",
               });
          },
          onError: (error) => {
               toast.error(`Error: ${error.message || "Something went wrong"} ❌`);
               console.error(error);
          },
     });

     // 🧠 Handle submit
     const handleSubmit = (e) => {
          e.preventDefault();

          // ✅ Send as JSON object, not FormData
          const userData = {
               firstname: formData.firstname,
               lastname: formData.lastname,
               email: formData.email,
               phone: formData.phone,
               city: formData.city,
               address: formData.address,
          };

          mutation.mutate(userData);
     };

     return (
          <section className="w-full h-max bg-midnight p-6 flex flex-col gap-3 rounded-xl">
               <div className="text-white/80 text-xl font-bold">Add user</div>

               <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input
                         type="text"
                         placeHolder="Enter First Name"
                         value={formData.firstname}
                         onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                    />
                    <Input
                         type="text"
                         placeHolder="Enter Last Name"
                         value={formData.lastname}
                         onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                    />
                    <Input
                         type="email"
                         placeHolder="Enter Email"
                         value={formData.email}
                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Input
                         type="tel"
                         placeHolder="Enter Phone Number"
                         value={formData.phone}
                         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <Input
                         type="text"
                         placeHolder="Enter City Name"
                         value={formData.city}
                         onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                    <Input
                         type="text"
                         placeHolder="Enter address"
                         value={formData.address}
                         onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                    <Button
                         text={mutation.isPending ? "Creating..." : "Create User"}
                         type="submit"
                         disabled={mutation.isPending}
                    />
               </form>
          </section>
     );
};

export default AddUser;

