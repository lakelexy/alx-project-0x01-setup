import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        {/* Content for Posts */}
      </main>
    </div>
  );
};

export default Posts;
