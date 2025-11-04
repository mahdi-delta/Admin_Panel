import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserById, updateUser } from "../../../Apis/User/UserServise";

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const data = await fetchUserById(id);
                setUser(data);
            } catch (error) {
                alert("Failed to fetch user.", error);
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(id, user);
            alert("User updated successfully ✅");
            navigate("/users");
        } catch (error) {
            alert("Update failed ❌", error);
        }
    };

    if (loading) return <p className="text-center mt-10 text-gray-400">Loading...</p>;
    if (!user) return <p>User not found.</p>;

    return (
        <div className="max-w-xl mx-auto mt-10 bg-authCard p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Edit User</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    value={user.firstname}
                    onChange={(e) => setUser({ ...user, firstname: e.target.value })}
                    className="p-2 rounded bg-gray-800 text-white border border-gray-600"
                    placeholder="First Name"
                />
                <input
                    type="text"
                    value={user.lastname}
                    onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                    className="p-2 rounded bg-gray-800 text-white border border-gray-600"
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    value={user.city}
                    onChange={(e) => setUser({ ...user, city: e.target.value })}
                    className="p-2 rounded bg-gray-800 text-white border border-gray-600"
                    placeholder="City"
                />
                <button
                    type="submit"
                    className="bg-blue text-white rounded-lg py-2 hover:bg-blue-600 transition"
                >
                    Save Changes
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/users")}
                    className="text-gray-400 hover:text-white transition"
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditUser;
