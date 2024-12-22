import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold">Users Page</h1>
        {/* Content for Users */}
      </main>
    </div>
  );
};

export default Users;
