import React from 'react';

const PostCard: React.FC = () => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-semibold">Post Title</h2>
      <p className="text-gray-600">This is a sample post description.</p>
    </div>
  );
};

export default PostCard;
