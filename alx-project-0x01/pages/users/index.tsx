// pages/users/index.tsx
import { useState } from "react";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const UsersPage: React.FC<{ users: UserData[] }> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState(users);

  const handleAddUser = (newUser: UserData) => {
    setUserList((prevUsers) => [...prevUsers, newUser]); // Add the new user to the list
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-semibold">Users</h1>
      </header>
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">User List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <div>
          <ul>
            {userList.map((user) => (
              <li key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.username}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default UsersPage;
