import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8 px-4">
	<h1 className="text-3xl font-bold mb-4">Posts</h1>
	<p className="text-lg">List of posts will appear here.</p>
      </main>
    </div>
  );
};

export default Posts;
