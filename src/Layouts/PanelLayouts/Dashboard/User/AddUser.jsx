import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../../../../Apis/User/UserServise";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/NewWork";

const AddUser = () => {
     const [formData, setFormData] = useState({
          firstName: "",
          lastName: "",
          email: "",
          city: "",
          address: "",
     });

     // ✅ Mutation for API call
     const mutation = useMutation({
          mutationFn: addUser,
          onSuccess: (data) => {
               alert("✅ User created successfully!");
               console.log("Response:", data);
               setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    city: "",
                    address: "",
               });
          },
          onError: (error) => {
               alert(`❌ ${error.message || "Something went wrong"}`);
               console.error(error);
          },
     });

     // 🧠 Handle submit
     const handleSubmit = (e) => {
          e.preventDefault();

          const data = new FormData();
          alert(formData.firstName, formData.lastName, formData.email, formData.city)
          data.append("firstName", formData.firstName);
          data.append("lastName", formData.lastName);
          data.append("email", formData.email);
          data.append("phone", formData.phone);
          data.append("city", formData.city);
          if (formData.image) data.append("image", formData.address);

          mutation.mutate(data);
     };

     return (
          <section className="w-full h-max bg-authCard p-6 flex flex-col gap-3 rounded-xl">
               <div className="text-white/80 text-xl font-bold">Add user</div>

               <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input
                         type="text"
                         placeHolder="Enter First Name"
                         value={formData.firstName}
                         onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                    <Input
                         type="text"
                         placeHolder="Enter Last Name"
                         value={formData.lastName}
                         onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                    <Input
                         type="email"
                         placeHolder="Enter Email"
                         value={formData.email}
                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Input
                         type="tel"
                         placeHolder="Enter phone Name"
                         value={formData.city}
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
