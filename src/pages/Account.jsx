import { useAuthStore } from "../store/authStore";
import { Navigate } from "react-router-dom";

function Account() {
  const { user } = useAuthStore();
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="min-h-screen p-8 text-white ">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <div className="bg-[#1f1f2f] p-6 rounded-lg max-w-md">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}

export default Account;
