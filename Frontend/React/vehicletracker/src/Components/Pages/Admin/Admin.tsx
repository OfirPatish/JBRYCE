import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appStore } from "../../Redux/store";
import { validateAndDispatchJWT } from "../../Utils/JWTUtils";
import axios from "axios";
import notify from "../../Utils/Notify";
import "./Admin.css";

function AdminPage(): JSX.Element {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [newRole, setNewRole] = useState<string>("");
  const [users, setUsers] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!validateAndDispatchJWT()) {
      navigate("/login");
    } else {
      const state = appStore.getState();
      if (state.auth.role !== "Admin") {
        notify.error("Access denied. Admins only.");
        navigate("/");
      } else {
        setUserRole(state.auth.role);
        setUsername(state.auth.username);
        notify.success(`Welcome back, ${state.auth.username}. You have admin privileges.`);
        fetchUsers();
      }
    }
  }, [navigate]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/admin/users");
      setUsers(response.data.map((user: { username: string }) => user.username));
    } catch (error) {
      notify.error("Failed to fetch users.");
    }
  };

  const handleRoleChange = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/admin/change-role", { username, newRole });
      notify.success(response.data.msg);
    } catch (error: any) {
      notify.error(error.response.data.msg);
    }
  };

  return (
    <div className="Admin">
      <h1>Role Management</h1>
      <p>Change the role of a user.</p>
      <p>Your Current Role: {userRole}</p>
      <form onSubmit={handleRoleChange}>
        <select value={username} onChange={(e) => setUsername(e.target.value)} required>
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
        <select value={newRole} onChange={(e) => setNewRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="User">User</option>
          <option value="Company">Company</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Change Role</button>
      </form>
    </div>
  );
}

export default AdminPage;
