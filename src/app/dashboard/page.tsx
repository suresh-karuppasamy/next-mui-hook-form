import { fetchUsers } from "@/services/userService";

export default async function DashboardPage() {
  const users = await fetchUsers(); // Server-side API call

  console.log("users", users);
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {/* {users?.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))} */}
      </ul>
    </div>
  );
}