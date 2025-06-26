import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/api/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => setError("Post not found or server error"));
  }, [id]);

  if (error) return <h2>{error}</h2>;
  if (!post) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <p><small>Posted on: {new Date(post.created_at).toLocaleString()}</small></p>
    </div>
  );
};

export default PostDetails;
