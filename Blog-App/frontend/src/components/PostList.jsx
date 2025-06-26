import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3000/api/posts");
    setPosts(res.data);
  };

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:3000/api/posts/${id}`);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>📃 All Posts</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.content}</p>
          <p><strong>Author:</strong> {post.author}</p>
          <button onClick={() => deletePost(post.id)}>🗑 Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
